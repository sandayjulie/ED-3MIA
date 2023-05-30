//import  Button from 'react-bootstrap/Button';
import NavProjeto from '../components/NavProjeto';
import Carrossel from '../components/Carrossel';
import Prod from '../components/Produtos';       
import Footer from '../components/Footer';
import img from '../IMG/LOGODELET.png'
import '../App.css';

function Home() {

  return (
    <div>
      <img src={img}
      width={210}
      height={210}
      />
      <h1>HOME</h1>
      <NavProjeto/>
      <Carrossel /> <br/>
    <h1>Nossos Produtos</h1> <br/>
      <Prod/> <br/>
    <Footer/>

    </div>
  )
}

export default Home;