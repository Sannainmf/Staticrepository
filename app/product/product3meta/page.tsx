import ProductPage2 from '@/app/Components/Product2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaareen',
  description: 'Shop the Kaareen, engineered for performance and comfort.',
};

export default function Product3Meta() {
  return <ProductPage2/>;
}