import db from "../dataBase.js";

/* done */
export async function getCashflow(req, res) {
  const { user } = res.locals;
  try {
    const userCashflow = await db.collection(user.email).find({ userId: user._id }).toArray()
  
    res.send(userCashflow);
    
  } catch (error) {
    res.sendStatus(500)
  }
}

/* done */
export async function addMovement(req, res) {
  const { type } = req.params;
  const movement = type === 'cash-in' ? req.body.movement : - (req.body.movement);
  const { user } = res.locals;

  try {
    await db.collection(user.email).insertOne({movement, date: Date.now(), userId: user._id});
    res.sendStatus(200);
    
  } catch (error) {
    res.sendStatus(500)

  }
}
