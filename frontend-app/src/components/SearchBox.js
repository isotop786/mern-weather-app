const SearchBox = ()=>(
    <div className="mt-4 row justify-content-center">
        <div className="form-group">
            <div style={{width:"350px"}}  className="input-group-prepend">
            <input style={{borderTopLeftRadius:".25rem",borderBottomLeftRadius:".25rem", borderBottomRightRadius:"0!important",borderTopLeftRadius:"0!important"}} type="text" name="" id="" className="form-control" placeholder="Enter zipcode..."/>
                    <button className="btn btn-danger">Enter</button>
            </div>
        </div>
    </div>
)

export default SearchBox;