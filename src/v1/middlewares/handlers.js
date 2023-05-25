// not found handlers

exports.isAuth = (req, res) => {
  const auth = req.headers.authorization;

  let decodedToken;

  try {
    decodedToken = jwt.verify(auth, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
    res.status(401);
    res.send(err.message || "Access forbidden");
    return;
  }

  if (decodedToken) {
    next();
  } else {
    res.status(401);
    res.send("Access forbidden");
    return;
  }
};
