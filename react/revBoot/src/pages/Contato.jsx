import Login from "./Login"
import img from '../IMG/LOGODELET.png'
import NavProjeto from "../components/NavProjeto";
import Footer from "../components/Footer";

function Contato(){

  return (
    <div>
      
      <img src={img}
      width={210}
      height={210}
      />
      <h1>CONTATO</h1>
      <NavProjeto/> <br/>
      <container>
      <h3>Alguma dúvida? Fale conosco!</h3><br/>
    <Login/>
    </container> <br/>
    <Footer/>
    </div>
  )
}

   export default Contato;