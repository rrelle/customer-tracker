const customers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", purchases: ["Lipgloss"] },
  { id: 2, name: "Bob Smith", email: "bob@example.com", purchases: ["Keyboard"] },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", purchases: ["Mouse"] }
];

customers.push({ id: 4, name: "David Wilson", email: "david@example.com", purchases: ["Headphones"] });
customers.shift();

console.log(customers);
customers[1].email = "charlie.updated@example.com";
console.log(customers);

customers[0].purchases.push("Lipstick");
console.log(customers[0].purchases);

customers.forEach(customer => {
  console.log(`Customer Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases}`);
});
console.log(customers.length);


