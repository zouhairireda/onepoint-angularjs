module.exports = {
  loginAction,
  logoutAction
};

const user = {
  email: 'j.doe@nowhere.com',
  password: 'password',
  firstName: 'John',
  lastName: 'Doe'
};

function loginAction(req, res, next) {
  if (req.body.email === user.email && req.body.password === user.password) {
    res.json(user);
  } else {
    res.status(404).end();
  }
}

function logoutAction(req, res, next) {
  res.status(200).end();
}