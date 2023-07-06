import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Badge, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { reservedRocket, cancelReserved } from '../../Redux/rocketSlice';

const RocketItem = ({ rocketData }) => {
  const isReserved = rocketData.reserved;
  const dispatch = useDispatch();
  const handleReserved = () => {
    if (!isReserved) {
      dispatch(reservedRocket(rocketData.id));
    } else {
      dispatch(cancelReserved(rocketData.id));
    }
  };
  const firstImage = rocketData.flickr_images.length > 0 ? rocketData.flickr_images[0] : '';
  return (

    <li style={{ listStyle: 'none' }}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            {firstImage && <img src={firstImage} alt="Rocket" style={{ width: '90%', height: '80%' }} />}
          </Col>
          <Col xs={12} md={8}>
            <h4>{rocketData.rocket_name}</h4>
            <p>
              {isReserved ? (
                <Badge pill bg="success">
                  reserved
                </Badge>
              ) : ''}
              {' '}
              {rocketData.description}
            </p>
            {isReserved
              ? <Button size="sm" type="button" onClick={handleReserved}>CancelReserved</Button>
              : <Button size="sm" type="button" onClick={handleReserved}>Reserve Rocket</Button>}
          </Col>
        </Row>
      </Container>

    </li>

  );
};
RocketItem.propTypes = {
  rocketData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
export default RocketItem;
