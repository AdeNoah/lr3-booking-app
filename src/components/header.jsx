import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-list">
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentsls</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
