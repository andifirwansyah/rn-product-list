export interface OrderItem {
  id: string;
  customer_name: string;
  total_products: number;
  total_price: number;
  created_at: string;
}

export interface Product {
  quantity: number;
  product: {
    name: string;
    price: number;
    id: number;
  };
}

export interface ProductItem {
  name: string;
  price: number;
  id: number;
}

export interface OrderListResponse {
  list: OrderItem[];
}

export interface OrderDetailResponse {
  order_id: string;
  customer_name: string;
  products: Product[];
}

export interface ProductListResponse {
  data: {
    name: string;
    price: number;
    id: number;
  };
}

export interface ProductOrder {
  product_id: string;
  quantity: string;
}

export interface CreateOrderPayload {
  customer_name: string;
  products: ProductOrder[];
}

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  order_id?: string;
}
