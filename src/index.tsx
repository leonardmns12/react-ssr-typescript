import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const props = JSON.parse(
  (document.getElementById("__SSR_DATA__") as HTMLElement).textContent as string
);

hydrateRoot(document.getElementById("root") as HTMLElement, <App {...props} />);
