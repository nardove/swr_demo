import PropTypes from 'prop-types';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function RenderData({ data }) {
  const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       '.box',
  //       { opacity: 0, scale: 0.8 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: 'back',
  //       }
  //     );
  //   },
  //   { dependencies: [data], scope: containerRef }
  // );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" ref={containerRef}>
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
