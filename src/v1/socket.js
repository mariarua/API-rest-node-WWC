const io = require("socket.io")(3001, {
  cors: { origins: "*" },
});

io.on("connection", (socket, require("./io")));
