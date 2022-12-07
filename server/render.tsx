import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";
import ListComment from "../service/comments.json";

const getComments = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ListComment);
    }, 1000);
  });
};

async function render(res) {
  const comments = await getComments();

  const stream = renderToPipeableStream(
    <html>
      <body>
        <div id="root">
          <App comments={comments} />
        </div>
      </body>
      <script
        id="__SSR_DATA__"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ comments }),
        }}
      ></script>
      <script src="main.js" />
    </html>,
    {
      onShellReady() {
        stream.pipe(res);
      },
    }
  );
}

export default render;
