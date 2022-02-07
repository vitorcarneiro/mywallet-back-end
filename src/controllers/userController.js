import db from "../dataBase.js";

/* done */
export async function getCashflow(req, res) {
  const { user } = res.locals;
  try {
    const userCashflow = await db.collection("cashflows").find({ userId: user._id }).toArray()
  
    res.send(userCashflow);
    
  } catch (error) {
    res.sendStatus(500)
  }
}

export async function updateUser(req, res) {
  const newUser = req.body;
  const { user } = req.locals;

  await db.collection('users').updateOne({
    _id: user._id
  }, {
    $set: newUser
  });

  res.sendStatus(200);
}

export async function deleteUser(req, res) {
  const { user } = req.locals;

  await db.collection('users').deleteOne({ _id: user._id });

  res.sendStatus(200);
}