import { useSWRConfig } from 'swr';
import { resetData, deleteUser, addUser } from '../services/api_handlers';

function Controls() {
  const { mutate } = useSWRConfig();

  const handleResetData = async () => {
    await resetData('/api/reset');
    mutate('/api/users');
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    e.target[0].value = '';

    const { response } = await addUser('/api/users', name);

    if (response.data.ok) {
      mutate('/api/users');
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    const id = e.target[0].value;
    e.target[0].value = '';

    const { response } = await deleteUser(`/api/users`, id);

    if (response.data.ok) {
      mutate('/api/users');
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-around mb-4 md:mt-0">
      <form onSubmit={handleAddUser} className="flex">
        <input
          className="field me-4 text-black"
          type="text"
          placeholder="Enter your name"
        />
        <button className="btn__primary grow" type="submit">
          Add user
        </button>
      </form>

      <form onSubmit={handleDeleteUser} className="flex">
        <input
          className="field me-4 text-black"
          type="number"
          step={1}
          placeholder="Enter user id to delete"
        />
        <button className="btn__danger grow" type="submit">
          Delete user
        </button>
      </form>

      <button className="btn__warning" onClick={handleResetData}>
        Reset data
      </button>
    </div>
  );
}

export default Controls;
