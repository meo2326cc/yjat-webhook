export default function open(repoName, prNumber, prTitle, prBody, user, prUrl, branch) {
  return {
    type: "flex",
    altText: `${user} opened merge request ${prTitle} `,
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `🚚 ${prTitle}`,
            weight: "bold",
            size: "md",
          },
        ],
        backgroundColor: "#aecad4",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${repoName}`,
            wrap: true,
            margin: "none",
            weight: "bold",
          },
          {
            type: "separator",
            margin: "8px",
          },
          {
            type: "text",
            text: `PR #${prNumber}: ${prTitle}`,
            wrap: true,
            margin: "8px",
          },
          {
            type: "text",
            text: `建立者: ${user}`,
            wrap: true,
          },
          {
            type: "text",
            text: `分支: ${branch}`,
            wrap: true,
          },
          {
            type: "text",
            text: "此 PR 包含: ",
          },
          {
            type: "text",
            text: prBody,
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
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
