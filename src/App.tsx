import { QueryClient, QueryClientProvider } from 'react-query';
import Hello from '~/components/Hello';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </>
  );
}

export default App;
