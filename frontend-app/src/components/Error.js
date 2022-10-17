
const Error = ()=>{

    return(
        <>
        <div className="row my-4 p-2">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body p-4 text-center">
                     <h2 style={{fontWeight:"300"}}>Whoa! Looks like your device / browser's location service is turned off. Please turn on your location service and try again. </h2>
                     <button style={{background:"#F44250",color:"#fff"}} className="btn mt-2"
                     onClick={()=>window.location.reload()}
                     >Try again</button>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </>
    )
}

export default Error;