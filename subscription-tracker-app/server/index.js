const express = require("express");
const app = express();
const SERVER_PORT = 4500;
const ctrl = require("./controllers/ctrl");

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.get("/api/subscriptions", ctrl.getSubscriptions);
app.post("/api/subscriptions", ctrl.addSubscription);
app.put("/api/subscriptions/:subscription_id", ctrl.editSubscription);
app.delete("/api/subscriptions/:subscription_id", ctrl.deleteSubscription);

app.listen(SERVER_PORT, () => {
  console.log(`server activated port ${SERVER_PORT}`);
});
