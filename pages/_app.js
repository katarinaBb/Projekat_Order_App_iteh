// components
import Layout from '@/components/Layout';

// utils
import '@/styles/globals.css';

// redux
import store from '@/redux/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
