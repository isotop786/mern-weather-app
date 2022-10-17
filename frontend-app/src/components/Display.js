
const Display = ({temp,name,main,humidity})=>{
    return(
        <>
        <div className="row my-4 p-2">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div style={{}} className="card">
                    <div className="card-body p-4 text-center">
                      <h1 className="heading-1">{temp}° Celsius</h1> 
                      <h3 className="slim-text">Location: {name}</h3>
                      <h3 className="slim-text">Status: {main}</h3>
                      <h3 className="slim-text">Humidity: {humidity}</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </>
    )
}

export default Display;