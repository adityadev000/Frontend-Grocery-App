export interface Product {
  id: number;
  name: string;
  detail: string;
  price: number;
  nutrition: string;
  rating: number;
  image: string;
  category: string;
}
export const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Bakery",
  "Meat",
  "Beverages",
  "Frozen",
];
export const products: Product[] = [
  // ===== FRUITS =====
  {
    id: 1,
    name: "Grocery Product 1",
    detail: "Fresh organic bananas rich in potassium and fiber.",
    price: 4.99,
    nutrition: "89 kcal per 100g",
    rating: 4.5,
    image: "https://picsum.photos/seed/product1/400/400",
    category: "Fruits",
  }
];
const descriptions = [
  "Fresh and high quality grocery product sourced directly from farms.",
  "Premium quality item perfect for daily cooking and healthy meals.",
  "Carefully selected and packed to maintain freshness.",
  "Rich in nutrients and essential vitamins for a healthy lifestyle.",
  "Perfect addition to your kitchen essentials.",
];

for (let i = 2; i <= 60; i++) {
  products.push({
    id: i,
    name: `Grocery Product ${i}`,
    detail: descriptions[i % descriptions.length],
    price: +(Math.random() * 15 + 2).toFixed(2),
    nutrition: `${Math.floor(Math.random() * 400)} kcal per 100g`,
    rating: +(Math.random() * 2 + 3).toFixed(1),
    image: `https://picsum.photos/seed/product${i}/400/400`,
    category: categories[i % categories.length],
  });
}


