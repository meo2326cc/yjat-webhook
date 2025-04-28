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
              action === "completed" && status === "completed" ? "✅" : "🚬"
            } Action: ${status}`,
            weight: "bold",
            size: "md",
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
            text: `服務 ${name}`,
            wrap: true,
            margin: "8px",
          },
          {
            type: "text",
            text: `title: ${title}`,
            wrap: true,
          },
          {
            type: "text",
            text: `summary: ${summary}`,
            wrap: true,
          },
          {
            type: "text",
            text: "repository:",
            wrap: true,
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
