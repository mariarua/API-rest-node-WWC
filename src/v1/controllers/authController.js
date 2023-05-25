const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email } = req.body;

  // Verificar usuario y contraseña base de datos
  token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  try {
    res.status(200).json({
      success: true,
      data: {
        token: token,
      },
    });
  } catch (e) {
    console.error(e.message);
    next(e);
  }
};

exports.restrictedView = (_, res) => {
  try {
    res.status(200).send("Confidential View");
  } catch (e) {
    console.error(e.message);
    next(e);
  }
};
