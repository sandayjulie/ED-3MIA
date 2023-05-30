import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../IMG/LOGODELET.png'


function NavProjeto() {
  return (
    <Navbar className='cor' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img
          className="d-block w-100"
          width={45}
          height={90}
          src={img}
          alt="First slide"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link className='link' href="/Sobre">Sobre Nós</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link className='link' href="/Contato">Contato</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button className='butt' >Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavProjeto;