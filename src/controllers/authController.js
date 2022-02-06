import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../dataBase.js';

/* done */
export async function signUp(req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);
    const userExist = db.collection('users').findOne({...user.email});

    if (userExist) 
      res.status(409).send("E-mail already in use");
    
    await db.collection('users').insertOne({ ...user, password: passwordHash })
  
    res.sendStatus(201);
    
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();

    await db.collection('sessions').insertOne({ token, userId: user._id });

    res.send(token);

  } else {
    res.sendStatus(401);
  }
}