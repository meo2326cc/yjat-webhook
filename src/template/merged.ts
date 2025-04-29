// 導入 LINE SDK 的型別
import { FlexMessage } from "@line/bot-sdk/dist/messaging-api/model/flexMessage.js";

interface mergedParams { 
  repoName: string, 
  prNumber: string, 
  prTitle: string, 
  prBody: string, 
  mergedBy: string, 
  branch: string 
}

export default function merged({repoName, prNumber, prTitle, prBody, mergedBy, branch}: mergedParams): FlexMessage {
  return {
    type: "flex",
    altText: `PR #${prNumber} 審閱已通過，即將部署！`,
    contents: {
      type: "bubble" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: "✅ Pull Request Merged!",
            weight: "bold",
            size: "md",
          },
        ],
        backgroundColor: "#aed4bf",
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: `#${prNumber}: ${prTitle} 已合併！`,
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
            text: "分支：",
            wrap: true,
            weight: "bold",
            margin: "8px",
          },
          {
            type: "text" as const,
            text: branch,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "合併者：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: mergedBy,
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
      styles: {
        hero: {
          separator: true,
          separatorColor: "#000000",
        },
      },
    },
  };
}
