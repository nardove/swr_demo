import useSWR from 'swr';
import RenderData from './RenderData';
import { getAllUsers } from '../services/api_handlers';

function RenderUsersWithSWR() {
  const { data, error } = useSWR('/api/users', getAllUsers);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="header">With SWR</h1>
      <RenderData data={data.users} />
    </>
  );
}

export default RenderUsersWithSWR;
