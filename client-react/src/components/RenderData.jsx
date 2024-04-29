import PropTypes from 'prop-types';

function RenderData({ data }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {data?.map((user) => (
        <li key={user.id} className="box">
          <code>
            <span className="text-slate-400">id:</span> {user.id}
            <br />
            <span className="text-slate-400">name:</span> {user.name}
          </code>
        </li>
      ))}
    </ul>
  );
}

RenderData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default RenderData;
