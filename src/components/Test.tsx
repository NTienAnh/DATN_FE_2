import axios from 'axios';
import { useQuery } from 'react-query';

const Test = () => {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    axios.get('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.data),
  );

  if (isLoading) return 'Loading...';

  if (error) return ('An error has occurred: ' + error) as any;

  return (
    <div>
      <h1>{data?.full_name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong> <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
};

export default Test;
