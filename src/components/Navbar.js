import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';


function NavScrollExample(props) {
  return (
    <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Container fluid>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input class="form-check-input" type="checkbox" onClick={props.handleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here'
}
export default NavScrollExample;

