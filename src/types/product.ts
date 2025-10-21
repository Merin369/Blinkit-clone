// src/types/product.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  offer?: number;   
}

export interface CartItem extends Product {
  quantity: number;
}
