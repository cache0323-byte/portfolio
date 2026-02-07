import { Layout } from '../templates/Layout';
import { FV } from '../organisms/Fv';
import { MessageSection } from '../organisms/MessageSection';
import { ProductSection } from '../organisms/ProductSection';
import { CheckItSection } from '../organisms/CheckItSection';

export const TopPage = () => {
  return (
    <Layout>
    <FV />
    <MessageSection />
    <CheckItSection />
    <ProductSection />
    </Layout>
  );
};