import React from 'react'
import {useNavigate} from 'react-router-dom'


const Carousel = () => {

  
  const navigate = useNavigate();

  const handleClick = ()=>{

    navigate("/thali")
  }

  const heading ={
    position: 'relative',
    top: '-200px',
    left: '40px',
    color:'#fff',
    fontSize:'50px',
    fontWeight:'bold'
  }

  const headingSub ={
    position: 'relative',
    top: '-200px',
    left: '40px',
    color:'#fff',
    fontSize:'35px',
    fontWeight:'bold'
  }
  
  const carouselBtn ={
    position: 'relative',
    top: '-180px',
    left: '40px',
    color:'#fff',
    fontSize:'20px',
    fontWeight:'bold'
  }


  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{background:'#000000'}}>
      <img src="https://thalirtp.com/wp-content/uploads/2022/06/Thali1-2.jpg"className="d-block w-100 " style={{
  opacity:'0.5'}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
<h1 style={heading}>Boundless Indian Buffet</h1>
        <h4 style={ headingSub} >Discover what good Indian
food truly means.</h4>
<button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Special Thali</button>
        <button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Custom Thali</button>
      </div>
    </div>
    <div className="carousel-item" style={{background:'#9e9e68'}}>
      <img src="https://thalirtp.com/wp-content/uploads/2022/04/3-1.jpg" style={{opacity:'0.5'}} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
        <h1 style={heading} className='mb-4'>Indian Desserts made In-House</h1>
        {/* <h4 style={headingSub} className='mb-4'>Flakey, fluffy, fresh, and always fabulous! Let us show you the true colors of Indian desserts</h4> */}
        <button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Special Thali</button>
        <button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Custom Thali</button>
      </div>
    </div>
    <div className="carousel-item" style={{background:'#000000'}}>
      <img src="https://thalirtp.com/wp-content/uploads/2022/04/2-1.jpg" style={{opacity:'0.5'}} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='mb-4' style={heading}>Inviting and Enticing</h1>
        <button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Special Thali</button>
        <button  className="btn btn-danger me-3" type="button" style={carouselBtn}onClick={handleClick}>Custom Thali</button>
        {/* <h4 style={headingSub} className='mb-4'>A buffet that gives not only the real and authentic flavors of Indian cuisine, but also the flavors of Indian hospitality.</h4> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
