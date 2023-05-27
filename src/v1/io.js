//Podría ser un controlador

module.exports = (socket) => {
  socket.on("message", (payload) => {
    socket.emit("chat", payload);
  });

  socket.on("offer", (payload) => {
    console.log("Se ha recibido una oferta", payload);
    socket.emit("update", payload);
  });

  socket.emit("status", "successfully connected to the socket");

  socket.on("disconnect", () => {
    console.log("Conexión cerrada");
  });
};
