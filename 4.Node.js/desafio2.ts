import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 3000;

function logMiddlware(req: Request, _res: Response, next: NextFunction): void {
  console.log(`Method: ${req.method}\nURL: ${req.url}`);
  next();
}

app.use(logMiddlware);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
