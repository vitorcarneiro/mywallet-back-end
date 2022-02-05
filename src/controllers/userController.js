import db from "../dataBase.js";

export async function getUser(req, res) {
  const { user } = req.locals;

  delete user.password;

  res.send(user);
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