import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return ( 
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://images.samsung.com/in/smartphones/galaxy-z-flip3-5g/images/galaxy-z-flip3-5g_highlights_kv.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Z Flip 3</h1>
          <h3>Adquira o seu incrível e inovador celular dobrável! </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://www.pakmobizone.pk/wp-content/uploads/2022/05/Samsung-Galaxy-Z-Fold-4-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Z Fold4 5G</h1>
          <h3>Quer um smartphone com a estética diferente e sofisticada?</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D3-Exclusive-Configurator-DT-800x600.jpg?$product-details-jpg$"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Galaxy S23</h1>
          <h3>Conheça a magia dos telefones S23!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;