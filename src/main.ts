const stock: { [id: string]: number } = {
  c001: 3,
  c002: 1,
};
const cart: string[] = [];

function addToCart(id: string, quantity: number): boolean {
  if (stock[id] < quantity) {
    return false;
  }

  stock[id] -= quantity;
  for (let i = 0; i < quantity; i++) {
    cart.push(id);
  }

  return true;
}

console.log(stock, cart);
const result1 = addToCart("c001", 1);
console.log(`결과1: ${result1}`);
console.log(stock, cart);
const result2 = addToCart("c002", 2);
console.log(`결과2: ${result2}`);
console.log(stock, cart);
