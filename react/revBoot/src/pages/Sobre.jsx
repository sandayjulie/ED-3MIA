import NavProjeto from '../components/NavProjeto';
import Carrossel from '../components/Carrossel';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import img from '../IMG/LOGODELET.png'

function Sobre() {
  return (
    <div>
      <img src={img}
      width={210}
      height={210}
      />
      <h1>SOBRE NÓS</h1>
      <NavProjeto/>
      <Carrossel /> <br/>
      <h2>Sobre A Empresa</h2> <br/>

      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Text>
          A Tech Space é uma empresa especializada em vendas de telefones, estabelecendo-se como líder no mercado de dispositivos móveis. Com uma reputação consolidada e uma vasta experiência no setor, a empresa se destaca pela excelência no atendimento ao cliente e pela oferta de produtos de alta qualidade.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          A Tech Space oferece uma ampla gama de telefones, incluindo os mais recentes modelos de smartphones e dispositivos tecnologicamente avançados. A empresa mantém parcerias estratégicas com fabricantes renomados, garantindo que seus clientes tenham acesso às marcas mais reconhecidas e confiáveis do mercado.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.pexels.com/photos/971325/pexels-photo-971325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/246684/pexels-photo-246684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Text>
          Além de oferecer produtos de última geração, a Tech Space se diferencia pela sua equipe de profissionais altamente capacitados e experientes. Os funcionários são especialistas em tecnologia móvel e estão prontos para fornecer orientação personalizada, ajudando os clientes a fazerem a escolha certa com base em suas necessidades e preferências.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          A empresa também se preocupa com a satisfação do cliente após a compra. A Tech Space oferece suporte técnico, assistência pós-venda e serviços de garantia, garantindo que os clientes tenham uma experiência tranquila e positiva ao adquirir um telefone.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Card>
      <br/>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Text>
          Além disso, a Tech Space acompanha de perto as tendências do mercado de dispositivos móveis, sempre atualizando seu inventário para oferecer as últimas inovações aos clientes. A empresa está constantemente em busca de novas oportunidades de negócio e parcerias estratégicas para continuar aprimorando sua oferta e fornecer soluções tecnológicas de ponta aos seus clientes.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          Em resumo, a Tech Space é uma empresa líder no ramo de vendas de telefones, conhecida por sua ampla seleção de dispositivos, atendimento excepcional ao cliente e compromisso com a qualidade e inovação tecnológica.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.pexels.com/photos/7245800/pexels-photo-7245800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Card>
      <br/>
      <Footer/>
      </div>
  );
}

export default Sobre;