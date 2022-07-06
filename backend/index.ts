import express, { Express, NextFunction, Request, response, Response, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Pool from 'pg';

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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: "http://localhost:4200" }))
app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})

// USERS
router.get('/user/:userID', getUser)
router.get('/users', getUsers)
router.delete('/user:userID', deleteUser)
router.post('/user')
router.put('/user')

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

//Delete Users
async function deleteUser(req: Request, res: Response, next: NextFunction) {
  const userID = parseInt(req.params.userID)
  pool.query('SELECT * FROM delete_user($1);', [userID]).then(
    query => res.status(200).json(query.rows[0])
  )
}

//Create Users
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body

  pool.query('SELECT * FROM create_user($1, $2, $3);', [username, email, password]).then(
    query => res.status(200).json(query.rows[0])
  )
}

//Update User
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body

  pool.query('SELECT * FROM update_user($1, $2, $3);', [username, email, password]).then(
    query => res.status(200).json(query.rows[0])
  )
}





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
async function deleteCharacter(req: Request, res: Response, next: NextFunction) {
  const characterID = parseInt(req.params.characterID)
  pool.query('SELECT * FROM delete_character($1);', [characterID]).then(
    query => res.status(200).json(query.rows[0])
  )
}

//Create Characters
export const createCharacter = async (req: Request, res: Response, next: NextFunction) => {
  const { id, username } = req.body

  pool.query('SELECT * FROM create_character($1, $2, $3, $4, $5, $6, $7, $8, $9);', [id, 'Unamed Bro/Gal', username, '', '', '', '', '', '']).then(
    query => res.status(200).json(query.rows[0])
  )
}

//Update Character
export const updateCharacter = async (req: Request, res: Response, next: NextFunction) => {
  const { id, user_id, character_name, username, class_level, race, gender, heigth, age, weight } = req.body

  pool.query('SELECT * FROM update_character($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);', [id, user_id, character_name, username, class_level, race, gender, heigth, age, weight]).then(
    query => res.status(200).json(query.rows[0])
  )
}

// CHARACTERS
router.get('/character/:characterID', getCharacter)
router.get('/characters', getCharacters)
router.delete('/character/:characterID', deleteCharacter)
router.post('/character', createCharacter)
router.put('/character', updateCharacter)