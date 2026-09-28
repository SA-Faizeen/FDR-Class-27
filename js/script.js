const orderList = document.querySelector(".order-list");
const box = document.querySelector(".order-box")
const orders = [
  { name: "Kalo Bhuna", price: 150, quantity: 10, spicy: true },
  { name: "Aloo Bhorta", price: 50, quantity: 5, spicy: false },
  { name: "Chicken Roast", price: 100, quantity: 10, spicy: true },
  { name: "Salad", price: 40, quantity: 1, spicy: false },
  { name: "Mutton Biriyani", price: 160, quantity: 10, spicy: true },
  { name: "Coca-Cola (250ml)", price: 25, quantity: 20, spicy: false },
  { name: "Faluda", price: 75, quantity: 5, spicy: false },
];
const synth = window.speechSynthesis;

let p = box.appendChild(document.createElement("p"));
p.classList.add("spicy-bool")
p.textContent = "Dish names colored in red are spicy";
orders.forEach((order, index) => {
  let pattern = `#${index + 1} ${order.name} ×${order.quantity} - $${order.price} / $${order.price * order.quantity}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.href = "#";
  a.textContent = pattern;
  a.style.color = order.spicy ? "red" : "unset"
  a.addEventListener("click", (e) => {
    e.preventDefault();

    utterance = new SpeechSynthesisUtterance(order.name);

    synth.speak(utterance);
  });

  li.appendChild(a);
  orderList.appendChild(li);
});
