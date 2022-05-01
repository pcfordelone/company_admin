import express, { Request, Response } from "express";

const app = express();
const port: string = process.env.APP_PORT;

app.use(express.json());

/**
 * Open Route
 */
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: "Seja bem vindo a API da Sistek IT Services",
  });
});

app.listen(3000, () => console.log(`Server running in port 3000 🤟🏻 ☠️  🚀`));
