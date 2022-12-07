import express from "express";
import render from "./server/render";

const app = express();

app.get("/", (_req, res) => {
  render(res);
});

app.use(express.static("build"));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
