export interface Product {
  amount: null;
  brand_subtype: string;
  brand: string;
  cannabinoids: any[];
  category: null;
  description: string;
  dosage: string;
  effects: any[];
  flavors: any[];
  image_urls: string[];
  ingredients: any[];
  kind_subtype: string;
  kind: string;
  custom_product_type: string;
  name: string;
  percent_cbd: number;
  percent_cbda: number;
  percent_thc: number;
  percent_thca: number;
  percent_tac: number;
  product_id: number;
  product_percent_cbd: number;
  product_percent_thc: number;
  review_count: number;
  root_subtype: string;
  terpenes: any[];
  type: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const url = `data/products.json`;
  const response = await fetch(url);
  const { products } = await response.json();
  return products as Product[];
}
