import {Body, Img} from '../styles/styleAbout';

export default function About() {
    return (
        <div id="about" className="text-light py-5" style={Body}>
            <div className="col-md-12">
                <div className="container">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-md-5 py-5">
                            <h2>Perfil Profesional</h2>
                            <h5>Abogado y Consultor  que ofrece servicios legales a personas y empresas nacionales e internacionales.</h5>
                            <a type="button" class="btn btn-light mt-3" href="Rodrigo_alberto_garcía_rodríguez_sin_referencias.pdf">Más infomación</a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center py-5">
                            <img className="col-md-12" src="facultadderecho.jpg" alt="" style={Img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}