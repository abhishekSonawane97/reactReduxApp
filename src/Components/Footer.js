import React from 'react'

const Footer = () => {
  return (
    <div>
      

      <footer className="bg-dark text-center text-white">
    <div  style={{display:'flex', justifyContent:'space-between'}}>
  <div className="container p-4 pb-0">
    
  <h3  style={{fontWeight:'bold'}}>|| राज<img src="https://tse3.mm.bing.net/th?id=OIP.yqQYPjPJU-QmTkL_SnwfQgHaHw&pid=Api&P=0" alt="Logo" width="80" height="74" className="d-inline-block align-text-top mx-4" style={{borderRadius:'50%'}}/>भोग ||</h3>
  <h4>Stay Connected</h4>
  </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 m-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Aurangabad, Mh 431111, IN.</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            RajBhog@Thali_Resto.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 1234567890</p>
        </div>
        </div>
  <div className="text-center p-3" style={{backgroundColor:`rgba(0, 0, 0, 0.2)`, fontWeight:'bold'}}>
    © 2022 Copyright :
    <a className="text-white" href="/"> RajBhog@Thali_Resto.com</a>
  </div>
</footer>


    </div>
  )
}

export default Footer
