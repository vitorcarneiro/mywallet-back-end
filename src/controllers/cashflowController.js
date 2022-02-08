import db from "../dataBase.js";

export async function getCashflow(req, res) {
  const { user } = res.locals;
  try {
    const userCashflow = await db.collection(user.email).find({ userId: user._id }).toArray()
  
    res.send(userCashflow);
    
  } catch (error) {
    res.sendStatus(500)
  }
}

export async function addMovement(req, res) {
  const { type } = req.params;
  const movement = type === 'cash-out' ? - (req.body.movement) : req.body.movement;
  const description = req.body.description;
  const { user } = res.locals;

  try {
    await db.collection(user.email).insertOne({ date: Date.now(), description, movement, userId: user._id });
    res.sendStatus(200);
    
  } catch (error) {
    res.sendStatus(500)
  }
}
