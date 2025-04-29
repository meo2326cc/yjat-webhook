// 導入 LINE SDK 的型別
import { FlexMessage } from "@line/bot-sdk/dist/messaging-api/model/flexMessage.js";

interface OpenParams {
  repoName: string;
  prNumber: string | number;
  prTitle: string;
  prBody: string;
  user: string;
  prUrl: string;
  branch: string;
}

export default function open({repoName, prNumber, prTitle, prBody, user, prUrl, branch}: OpenParams): FlexMessage {
  return {
    type: "flex" as const,
    altText: `新版本合併請求： #${prNumber} ${prTitle}`,
    contents: {
      type: "bubble" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: `🚚 #${prNumber} ${prTitle}`,
            weight: "bold",
            size: "md",
            wrap: true,
          },
        ],
        backgroundColor: "#aecad4",
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: "新版本合併請求。",
            wrap: true,
            margin: "none",
            weight: "bold",
          },
          {
            type: "separator" as const,
            margin: "8px",
          },
          {
            type: "text" as const,
            text: "建立者：",
            wrap: true,
            margin: "8px",
            weight: "bold"
          },
          {
            type: "text" as const,
            text: user,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "分支：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: branch,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "內容：",
            weight: "bold",
          },
          {
            type: "text" as const,
            text: prBody,
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "button" as const,
            action: {
              type: "uri" as const,
              label: "詳細資料",
              uri: prUrl,
            },
            style: "secondary",
          },
        ],
      },
      styles: {
        hero: {
          separator: true,
          separatorColor: "#000000",
        },
      },
    },
  };
}
