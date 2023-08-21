import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { CartProvider } from './context/CartContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <CounterProvider>
      <CartProvider>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </CartProvider>
    </CounterProvider>
  </QueryClientProvider>





);
