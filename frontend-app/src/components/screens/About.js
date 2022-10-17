import Footer from "../Footer";
const About = ()=>{
    return(
        <div className="container">
 
        <div className="row mt-4 p-2">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div style={{}} className="card">
                    <div className="card-body p-4 text-center">
                      <h1 className="heading-1">Developer: Maruf</h1> 
                      <h3 className="slim-text">Email: marufkabir@786@gmail.com</h3>
                      <h3 className="slim-text">code: </h3>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        <Footer path={""} name="Home"/>
        </div>
    )
}

export default About;