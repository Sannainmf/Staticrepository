
import type { Metadata } from 'next';
import ProductPage from '../Components/Product1';


export const metadata: Metadata = {
  title: 'Kaareen',
  description: 'Shop the Kaareen, engineered for performance and comfort.',
};

export default function Product() {
  return <ProductPage />;
}