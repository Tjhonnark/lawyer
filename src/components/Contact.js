import Forms from "./Forms"

export default function Contact() {
    return (
        <div id="contact" className="bg-dark text-light">
            <div className="col-md-12">
                <div className="container">
                <h2 className="d-flex justify-content-center py-4">Contáctanos</h2>
                    <div className="row">
                        <div className="col-md-6">
                                <h5>Horarios</h5>
                                <p>
                                    Lunes - Viernes: 8:00AM - 5:00PM
                                </p>
                                <h5>Teléfonos</h5>
                                <p>
                                    <i class="bi bi-telephone-fill">    Fijo - +507 387-6454</i>
                                </p>
                                <p>
                                    <i class="bi bi-phone-fill">    Móvil - +507 6517-8393</i>
                                </p>
                                <h5>Redes</h5>
                                <p>
                                    <i class="bi bi-envelope-fill"> ragr1969@hotmail.com</i>
                                </p>
                                <p>
                                    <a className="text-decoration-none text-info" href="https://www.linkedin.com/in/rodrigo-alberto-garc%C3%ADa-rodr%C3%ADguez-43ba4918a" target="blank">
                                    <i className="bi bi-linkedin">  LinkedIn</i>
                                    </a>
                                </p> 
                                <h5>Dirección Postal</h5>
                                    <p>
                                    Estafeta 0819 El Dorado Panamá.
                                    <br/>
                                    Apartado Postal 07774
                                    </p>
                        </div>
                    
                    
                        <div className="col-md-6">
                            <h4>Trabajemos Juntos</h4>
                            <Forms />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}