import { Request, response, Response, Router } from "express";

const router: Router = Router();
const port: string = process.env.APP_PORT;

/**
 * Open Route
 */
router.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: `Seja bem vindo a API da Sistek IT Services - ${port}`,
  });
});

export { router };
