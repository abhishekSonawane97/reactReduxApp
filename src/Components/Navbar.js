import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = ()=>{

    navigate("/thali")
  }


  return (
    <nav className="navbar navbar-dark sticky-top" height="100" style={{background:'black'}} >
  <div className="container-fluid">
    <h1 className="navbar-brand"  style={{fontSize:'40px', marginTop:'2vh'}}>
    <img src="https://tse3.mm.bing.net/th?id=OIP.yqQYPjPJU-QmTkL_SnwfQgHaHw&pid=Api&P=0" alt="Logo" width="80" height="74" className="d-inline-block align-text-top mx-4" style={{borderRadius:'50%'}}/>
   || राज-भोग ||
    </h1>
    <button  className="btn btn-danger me-3" type="button" style={{height:'8vh'}} onClick={handleClick}>Order Online  </button>
  </div>
</nav>
  )
}

export default Navbar
