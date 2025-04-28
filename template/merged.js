export default function merged(repoName, prNumber, prTitle, prBody, mergedBy, branch) {
  return {
    type: "flex",
    altText: `${mergedBy} merged merge request ${prTitle} `,
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
            text: "PR：",
            wrap: true,
            margin: "8px",
            weight: "bold",
          },
          {
            type: "text",
            text: `#${prNumber}: ${prTitle}`
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
            text: "更新項目：",
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
