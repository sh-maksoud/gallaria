import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Painting.css';
import PropTypes from 'prop-types'; 
import SlideShowContext from '../../../contexts/SlideShowContext';


export function Painting(props) {
  const { setOpen } = useContext(SlideShowContext);

  const formattedName = props.name.split(' ').join('-').toLowerCase();

  return (
    <NavLink to={`/gallaria/${props.id}/${formattedName}`} title="Gallaria">
      <section className="artwork" onClick={() => setOpen(true)}>
        <div className="gradient_wrapper"></div>
        <img src={props.thumbnail} alt={props.name} />
        <div className="painting_info">
          <h1>{props.name}</h1>
          <p>{props.artist}</p>
        </div>
      </section>
    </NavLink>
  );
}

Painting.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
