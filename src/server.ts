import express from "express";
import router from "./routes";

const port = 4003;
const url = `http://localhost:${port}`;

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () =>
  console.log(`Application is running! Access URL: ${url}`)
);
