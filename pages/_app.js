import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/layout';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
