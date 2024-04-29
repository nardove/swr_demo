import { useState, useEffect } from 'react';
import RenderData from './RenderData';

import { getAllUsers } from '../services/api_handlers';

function RenderUsersStandard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const response = getAllUsers('/api/users');

    response
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="header">Standard</h1>
      <RenderData data={data.users} />
    </>
  );
}

export default RenderUsersStandard;
