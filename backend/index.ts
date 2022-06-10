import express, { Express, NextFunction, Request, response, Response, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Pool from 'pg'

dotenv.config();

const app: Express = express();
const port = 3000;
const pool = new Pool.Pool({
  user: "raybyam",
  host: "localhost",
  database: "sheet",
  password: "Stanley56",
  port: 5432
})
const router = express.Router()

app.use(cors({ origin: "http://localhost:4200" }))
app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})

// USERSSS
router.get('/user/:userID', getUser)
router.get('/users', getUsers)

async function getUser(req: Request, res: Response, next: NextFunction) {
  const userID = parseInt(req.params.userID)

  pool.query('SELECT * FROM users WHERE id = $1;', [userID]).then(
    query => res.status(200).json(query.rows[0])
  )
}

async function getUsers(req: Request, res: Response, next: NextFunction) {
  pool.query('SELECT * FROM users;', []).then(
    query => res.status(200).json(query.rows)
  )
}






// CHARACTERS
router.get('/character/:characterID', getCharacter)
router.get('/characters', getCharacters)

async function getCharacter(req: Request, res: Response, next: NextFunction) {
  const characterID = parseInt(req.params.characterID)

  pool.query('SELECT * FROM characters WHERE id = $1;', [characterID]).then(
    query => res.status(200).json(query.rows[0])
  )
}

async function getCharacters(req: Request, res: Response, next: NextFunction) {
  pool.query('SELECT * FROM characters;', []).then(
    query => res.status(200).json(query.rows)
  )
}

//Delete Character
router.delete('/character/:characterID', deleteCharacter)

async function deleteCharacter(req: Request, res: Response, next: NextFunction) {
  const characterID = parseInt(req.params.characterID)
  console.log("do i ever get here")
  pool.query('SELECT * FROM delete_character($1);', [characterID]).then(
    query => res.status(200).json(query.rows[0])
  )
}