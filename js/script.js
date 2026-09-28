const orderList = document.querySelector(".order-list");
const orders = [
  { name: "Kalo Bhuna", price: 150, quantity: 10 },
  { name: "Aloo Bhorta", price: 50, quantity: 5 },
  { name: "Chicken Roast", price: 100, quantity: 10 },
  { name: "Salad", price: 40, quantity: 1 },
  { name: "Mutton Biriyani", price: 160, quantity: 10 },
  { name: "Coca-Cola (250ml)", price: 25, quantity: 20 },
  { name: "Faluda", price: 75, quantity: 5 },
];
const synth = window.speechSynthesis;

orders.forEach((order, index) => {
  let pattern = `#${index + 1} ${order.name} ×${order.quantity} - $${order.price} / $${order.price * order.quantity}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.href = "#";
  a.textContent = pattern;

  a.addEventListener("click", (e) => {
    e.preventDefault();

    utterance = new SpeechSynthesisUtterance(order.name);

    synth.speak(utterance);
  });

  li.appendChild(a);
  orderList.appendChild(li);
});
