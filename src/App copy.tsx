import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { type } from 'os';

interface User {
  id: number;
  name: string;
  email: string;
}
type Data = User[];
interface ErrorWithMessage {
  message: string;
}

const fetchData = async (): Promise<Data> => {
  const response = await axios.get<Data>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
  console.log(response.data);
};

const App: React.FC = () => {
  const { isLoading, error, data } = useQuery<Data, AxiosError>(
    'repoData',
    fetchData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>An error has occurred: {(error as ErrorWithMessage).message}</div>
    );

  // render your data here
  return (
    <div className='App'>
      {data?.map((user: User) => (
        <div key={user.name}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
