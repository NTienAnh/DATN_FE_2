import { QueryClient, QueryClientProvider } from 'react-query';
import Hello from '~/components/Hello';
import Test from './components/Test';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hello />
        <Test />
      </QueryClientProvider>
    </>
  );
}

export default App;
