import { Template, Background, Container} from './styles/styleServices'

export default function Services() {
    return (
        <div id="services">
            <div className='row d-flex align-items-center' style={Template}>
            <div style={Background}></div>
                <div className="p-5" style={Container}>
                    <div className="col-md-12 d-flex justify-content-center my-3">
                        <h2>Nuestros Servicios</h2>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-lg-4">
                            <h2>Derechos Humanos</h2>
                            <p>Consultor en Sistemas Nacionales e Internacionales de Protección de Derechos Humanos.</p>
                            <a class="btn btn-primary" href="#">Ver detalles »</a>
                        </div>
                        <div class="col-lg-4">
                            <h2>Derecho Administrativo</h2>
                            <p>Asesoría y tramite en temas de derecho administrativo, contratación pública y servicios con el Estado.</p>
                            <p><a class="btn btn-primary" href="#">Ver detalles »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <h2>Abogado</h2>
                            <p>Ofrecemos servicios en diversas áreas como Procesos Civiles,  Migración, Registro Público, Registro Sanitario, Marcas, Licencias Comerciales, Abanderamiento de Naves, Aeronautica Civil,  Zona Libre.</p>
                            <p><a class="btn btn-primary" href="#">Ver detalles »</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}