
const Text = ()=>{
    return(
        <div style={{color:"#fff", marginTop:"5rem"}}>
        <div className="row">   
        <div className="col text-center">
            <h1 style={{fontWeight:'400'}}>Weather Forcast</h1>
        </div>
        </div>
        <div className="row">
            <div className="col text-center">   
            <p className="my-4" style={{color:'#ddd',fontWeight:"bold"}}>
                    Click the button below to get weather information of your current location.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Text;