import navIcon from '../assets/navbar-icon.png'

export default function Navbar(){
    return(
        <>
          <div className="navbar">
            <img src={navIcon} alt="Earth" width="24px" height="24px" />
            <p>my travel journal</p>
          </div>
        </>
    )
}