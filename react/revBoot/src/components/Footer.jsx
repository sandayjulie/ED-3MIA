import img from '../IMG/LOGODELET.png'

const Footer = () => <footer className="page-footer font-small blue pt-4 ">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"><img src={img} width={150}
                height={150}/></h5>
                <p>Tech Space Tecnologias, o jeito certo de viver.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Nossas Páginas:</h5>
                <ul className="list-unstyled">
                    <li><a className='link2' href="/">Home</a>&nbsp;&nbsp;&nbsp;</li>
                    <li><a className='link2' href="/Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;</li>
                    <li><a className='link2' href="/Contato">Contato</a>&nbsp;&nbsp;&nbsp;</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Informações:</h5>
                <ul className="list-unstyled">
                    <li><p>Contato: techspace@tecspace.com.br </p></li>
                    <li><p>Endereço: Rua Fiap School </p></li>
                    <li><p>Dono: Ednilson Nascimento</p></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a className='link2' href="https://fiap.com/colegio"> DireitosRES.com</a>
    </div> 

</footer>

export default Footer