export default function merged(repoName, prNumber, prTitle, prBody, mergedBy, branch) {
  return {
    type: "flex",
    altText: `PR #${prNumber} 審閱已通過，即將部署！`,
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "✅ Pull Request Merged!",
            weight: "bold",
            size: "md",
          },
        ],
        backgroundColor: "#aed4bf",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `#${prNumber}: ${prTitle} 已合併！`,
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
            text: "分支：",
            wrap: true,
            weight: "bold",
            margin: "8px",
          },
          {
            type: "text",
            text: branch,
            wrap: true,
          },
          {
            type: "text",
            text: "合併者：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: mergedBy,
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
      styles: {
        hero: {
          separator: true,
          separatorColor: "#000000",
        },
      },
    },
  };
}
