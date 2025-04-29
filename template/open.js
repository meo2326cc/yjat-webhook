export default function open(repoName, prNumber, prTitle, prBody, user, prUrl, branch) {
  return {
    type: "flex",
    altText: `新版本合併請求 ${prNumber} ${prTitle}`,
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `🚚 #${prNumber} ${prTitle}`,
            weight: "bold",
            size: "md",
            wrap: true,
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
            text: "新版本合併請求。",
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
            text: "建立者：",
            wrap: true,
            margin: "8px",
            weight: "bold"
          },
          {
            type: "text",
            text: user,
            wrap: true,
          },
          {
            type: "text",
            text: "分支：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: branch,
            wrap: true,
          },
          {
            type: "text",
            text: "內容：",
            weight: "bold",
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
