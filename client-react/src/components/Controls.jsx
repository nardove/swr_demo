import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import { resetData, deleteUser, addUser } from '../services/api_handlers';

function Controls() {
  const { mutate } = useSWRConfig();

  const add = useSWRMutation('/api/users', addUser);
  const del = useSWRMutation('/api/users', deleteUser);

  const handleResetData = async () => {
    await resetData('/api/reset');
    mutate('/api/users');
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    e.target[0].value = '';

    await add.trigger(name);
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    const id = e.target[0].value;
    e.target[0].value = '';

    await del.trigger(id);
  };

  return (
    <div className="flex flex-col gap-4 justify-around mb-4 md:mt-0 md:w-2/4 mx-auto">
      {add.error && <div className="text-red-500">Failed to add user</div>}

      {del.error && <div className="text-red-500">Failed to delete user</div>}

      <form onSubmit={handleAddUser} className="flex">
        <input
          className="field me-4 text-black"
          type="text"
          placeholder="Enter your name"
        />
        <button className="btn btn__primary grow" type="submit">
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
        <button className="btn btn__danger grow" type="submit">
          Delete user
        </button>
      </form>
      <button className="btn btn__warning" onClick={handleResetData}>
        Reset data
      </button>
    </div>
  );
}

export default Controls;
