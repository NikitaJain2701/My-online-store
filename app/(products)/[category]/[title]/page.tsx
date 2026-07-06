import ProductsDetails from "@/components/ProductDetails";
import { ProductDetailPageProps } from "@/lib/types";

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return <ProductsDetails title={params.title} />;
}
