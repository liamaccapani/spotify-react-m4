import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
// import logo from '../assets/spotify-logo.png';



const CustomSidebar = () => {
  return (
    <Container className="sidebar">
      <Row className="flex-drection-column justify-content-start">
        <Col xs={0} lg={4}>
          <div className="sidebar">
            {/* <div className="spotify-logo">
              <img src="logo" alt="spotify logo" />
            </div> */}

            <div className="icons-menu mt-3">
              <ul className="pl-0">
                <Link to="/">
                  <li>
                  <ArrowRight /> Home
                  </li>
                </Link>
                <Link to="/search">
                  <li className="text-white">
                  <ArrowRight /> Search
                  </li>
                </Link>
                <Link to="/album">
                  <li>
                    <ArrowRight /> Your Library
                  </li>
                </Link>
              </ul>
            </div>

            <div className="install-app p-1">
              <i className="bi bi-cloud-arrow-down"></i>
              <span>Install app</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSidebar;
