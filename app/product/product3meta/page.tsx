import type { Metadata } from 'next';

import ProductPage3 from '@/app/Components/Product3';

export const metadata: Metadata = {
  title: 'Kaareen Pulse Runner',
  description: 'Shop the Kaareen Pulse Runner, engineered for performance and comfort.',
};

export default function Product3Meta() {
  return <ProductPage3 />;
}