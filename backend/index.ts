import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/getUsers',(req: Request, res: Response) => {
  let user_data = [
    { name: "ray", email: "rsb@gmail.com", password: "Stanley" },
    { name: "joe", email: "jmb@gmail.com", password: "Matthew" },
  ]
  res.json(user_data);
}); 

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})