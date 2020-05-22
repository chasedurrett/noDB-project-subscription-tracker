let subscriptions = [
  { id: 0, name: "Spotify", type: "music", price: 9.99, dueDate: "July 1st" },
];
let id = 1;

module.exports = {
  getSubscriptions: (req, res) => {
    res.status(200).send(subscriptions);
  },

  addSubscription: (req, res) => {
    const { name, type, price, dueDate } = req.body;
    const newSub = { id, name, type, price, dueDate };
    subscriptions.push(newSub);
    id++;
    res.status(200).send(subscriptions);
  },

  editSubscription: (req, res) => {
    const { subscription_id } = req.params;
    const { newPrice, newDueDate } = req.body;
    const index = subscriptions.findIndex(
      (index) => index.id === +subscription_id
    );

    if (index === -1) {
      return res.status(404).send("Subscription not found");
    }

    subscriptions[index].price = newPrice;
    subscriptions[index].dueDate = newDueDate;

    res.status(200).send(subscriptions);
  },

  deleteSubscription: (req, res) => {
    const { subscription_id } = req.params;

    const index = subscriptions.findIndex(
      (index) => index.id === +subscription_id
    );

    if (index === -1) {
      return res.status(404).send("Subscription not found");
    }

    subscriptions.splice(index, 1);

    res.status(200).send(subscriptions);
  },
};
