import {Link} from 'react-router-dom'

const Footer = ({path, name})=>{
    return(
        <div className="text-center" style={{marginTop:"10rem"}}>
            <small><Link style={{color:"#fff"}} to={`/${path}`} >{name}</Link></small>
        </div>
    )
}

export default Footer;