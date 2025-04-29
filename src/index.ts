import * as line from "@line/bot-sdk";
import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import merged from "./template/merged";
import open from "./template/open";
import actionTemplate from "./template/action";
// LINE SDK 相關設定

interface config {
  channelSecret: string;
  channelAccessToken: string;
}

const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
};

const client = new line.messagingApi.MessagingApiClient(config as config);

// create Express app
const app = express();

app.use(bodyParser.json());
app.use("line-webhook", line.middleware(config as config));

// 首頁
app.get("/", (req, res) => {
  res.status(200).send("啟動成功！");
});

//line

// client.pushMessage({
//   to: process.env.GROUP_ID,
//   messages: [{ type: "text", text: "hello, world" }],
// });

// webhook 路由
app.post("/webhook", async (req, res) => {
  const { action, pull_request, repository, check_run } = req.body;

  if (action === "closed" && pull_request.merged) {
    const repoName = repository.full_name
    const prNumber = pull_request.number
    const prTitle = pull_request.title
    const prBody = pull_request.body || "空白";
    const branch = pull_request.head.ref
    const mergedBy=  pull_request.merged_by?.login || "unknown";

    client.pushMessage({
      to: process.env.GROUP_ID as string,
      messages: [merged({repoName, prNumber, prTitle, prBody, mergedBy, branch})],
    });
  }

  if (action === "opened") {
    const repoName = repository.full_name; // 暫時未使用
    const prNumber = pull_request.number;
    const prTitle = pull_request.title;
    const prBody = pull_request.body || "空白";
    const branch = pull_request.head.ref;
    const user = pull_request.user?.login || "unknown";
    const prUrl = pull_request.html_url;

    client.pushMessage({
      to: process.env.GROUP_ID as string,
      messages: [
        open({repoName, prNumber, prTitle, prBody, user, prUrl, branch}),
      ],
    });
  }

  if (check_run?.name === "Zeabur") {
    const status = check_run.status;
    const name = check_run.name;
    const conclusion = check_run?.conclusion || "pending";
    const title = check_run.output.title || "空白";
    const summary = check_run.output.summary || "空白";
    const repoName = repository.full_name; // 暫時未使用
    const repoDesc = repository.description || "--";

    client.pushMessage({
      to: process.env.GROUP_ID as string,
      messages: [
        actionTemplate({
          action,
          status,
          name,
          title,
          summary,
          repoName,
          repoDesc,
          conclusion
        }),
      ],
    });
  }

  res.status(200).send("ok");
});

// listen on port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`成功！- listening on ${port}`);
});
