import Ws from "App/Services/Ws";

Ws.boot();

Ws.io.on("connection", (socket) => {
  socket.emit("news", {hello: "world"});
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
