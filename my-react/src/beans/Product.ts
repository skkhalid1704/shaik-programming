export class Product {
  id: string = "";
  name: string = "";
  type: string = "";
  price: number = 0;
  imageUrl: string = "";
  availability: string = "";
  shippingDimensions: string = "";
  shippingType: string = "";
}
export interface ProductProps {
  product: Product;
}
