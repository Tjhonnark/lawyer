import { Card } from '../styles/styleExperience'

export default function Experiencias() {

    return (
        <div id="experiencias" className="py-5">
            <div className=''>
                <div className='col-md-12'>      
                    <div id='carousel' className='carousel slide bg-info' data-bs-ride="carousel">
                        <div className='carousel-inner'>
                            <div className=''>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-4 carousel-item active">
                                            <div class="card" style={Card}>
                                                <img src="demo.jpg" class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h3 className="card-title text-center">
                                                        Entrevistas
                                                    </h3>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="col-sm-12 col-lg-4 carousel-item">
                                            <div class="card" style={Card}>
                                                <img src="demo.jpg" class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h3 className="card-title text-center">
                                                        Entrevistas
                                                    </h3>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="col-sm-12 col-lg-4 carousel-item">
                                            <div class="card" style={Card}>
                                                <img src="demo.jpg" class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h3 className="card-title text-center">
                                                        Entrevistas
                                                    </h3>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}