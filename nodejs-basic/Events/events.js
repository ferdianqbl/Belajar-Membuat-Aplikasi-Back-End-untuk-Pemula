const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeCoffee);

// Memicu event 'coffee-order' terjadi. (mengaktifkan fungsinya)
// myEventEmitter.emit("coffee-order", { name: "Luwak" });

// const makeBill = ({ price }) => {
//   console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// myEventEmitter.on("coffee-order", makeBill);

// myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
