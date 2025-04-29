function action(action, status, name, title, summary, repoName, repoDesc, conclusion) {

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
    type: "flex",
    altText: `${conclusionSymbol.emoji} 部署階段，狀態：${status}`,
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${conclusionSymbol.emoji} 部署階段，狀態：${status}`,
            weight: "bold",
            size: "md",
            wrap: true,
          },
        ],
        backgroundColor: "#bdaed4",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${conclusion}`,
            wrap: true,
            margin: "none",
            weight: "bold",
            color: conclusionSymbol.color
          },
          {
            type: "separator",
            margin: "8px",
          },
          {
            type: "text",
            text: "服務名稱：",
            wrap: true,
            margin: "8px",
            weight: "bold",
          },
          {
            type: "text",
            text: name,
            wrap: true,
          },
          {
            type: "text",
            text: "動作",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: action,
            wrap: true,
          },
          {
            type: "text",
            text: "標題",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: title,
            wrap: true,
          },
          {
            type: "text",
            text: "摘要",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: summary,
            wrap: true,
          },
          {
            type: "text",
            text: "專案：",
            wrap: true,
            weight: "bold",
          },
          {
            type: "text",
            text: `${repoName}`,
          },
          {
            type: "text",
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

function footer(action, conclusion) {
  if (action === "completed" && conclusion === "success") {
    return {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
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
