// 導入 LINE SDK 的型別
import { FlexMessage } from "@line/bot-sdk/dist/messaging-api/model/flexMessage.js";

interface ActionParams {
  action: string;
  status: string;
  name: string;
  title: string;
  summary: string;
  repoName: string;
  repoDesc: string;
  conclusion: string;
}

function action({action, status, name, title, summary, repoName, repoDesc, conclusion}: ActionParams): FlexMessage {

  let conclusionSymbol = {
    emoji: '🚬',
    color: '#000000'
  };

  switch (conclusion) {
    case 'success':
      conclusionSymbol.emoji = '✅';
      conclusionSymbol.color = '#30ba3c';
      break;
    case 'failure':
      conclusionSymbol.emoji = '❌';
      conclusionSymbol.color = '#bf3636';
      break;
    default:
      break;
  }

  return {
    type: "flex" as const,
    altText: `${conclusionSymbol.emoji} 部署階段，狀態：${status}`,
    contents: {
      type: "bubble" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: `${conclusionSymbol.emoji} 部署階段，狀態：${status}`,
            weight: "bold",
            size: "md",
            wrap: true,
          },
        ],
        backgroundColor: "#bdaed4",
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "text" as const,
            text: `${conclusion}`,
            wrap: true,
            margin: "none",
            weight: "bold",
            color: conclusionSymbol.color
          },
          {
            type: "separator" as const,
            margin: "8px",
          },
          {
            type: "text" as const,
            text: "服務名稱：",
            wrap: true,
            margin: "8px",
            weight: "bold",
          },
          {
            type: "text" as const,
            text: name,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "動作",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: action,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "標題",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: title,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "摘要",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: summary,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "專案：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text" as const,
            text: `${repoName}`,
          },
          {
            type: "text" as const,
            text: `${repoDesc}`,
          }
        ],
      },
      footer: footer(action, conclusion),
      styles: {
        hero: {
          separator: true,
          separatorColor: "#000000",
        },
      },
    },
  };
}

function footer(action: string, conclusion: string): any | null {
  if (action === "completed" && conclusion === "success") {
    return {
      type: "box" as const,
      layout: "vertical" as const,
      contents: [
        {
          type: "button" as const,
          action: {
            type: "uri" as const,
            label: "開啟網站",
            uri: "https://yjat.zeabur.app/",
          },
          style: "secondary",
        },
      ],
    };
  } else {
    return null;
  }
}

export default action;
