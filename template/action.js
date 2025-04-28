function action(action, status, name, title, summary, repoName, repoDesc) {
  return {
    type: "flex",
    altText: `action ${action}: ${status}`,
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${
              status === "completed" ? "✅" : "🚬"
            } Action: ${status}`,
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
            text: `${action}`,
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
            text: "title：",
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
            text: "summary：",
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
            text: "repository：",
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
          },
        ],
      },
      footer: footer(action, status),
      styles: {
        hero: {
          separator: true,
          separatorColor: "#000000",
        },
      },
    },
  };
}

function footer(action, status) {
  if (action === "completed" && status === "completed") {
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
