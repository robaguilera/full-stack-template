import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 5001;

app.get("/api/v1", (req: Request, res: Response) => {
  res.send({ greeting: "hello!!" });
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
