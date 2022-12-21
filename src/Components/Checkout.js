import React, {useState} from 'react'
import Footer from './Footer'
import { useSelector } from 'react-redux'
// import { addItems } from '../Slices/Thalislice'

const Checkout = () => {
let [total, setTotal] = useState(0)
  const item = useSelector((state) => state.customThali);
  
  

  // const dispatch = useDispatch();

  
  return (
    <div className='bg-dark text-light' style={{marginBottom:'20px'}}>

      {/* <div className="container bg-dark text-light" style={{border:'1px solid white', padding:'20px'}}>
        <h2>my</h2>
        <h2>Cart !</h2>
      </div> */}

<nav className="navbar navbar-dark" height="100" style={{background:'black'}} >
<div  style={{display:'flex', justifyContent:'space-between'}}>

<div className='m-4 text-center' style={{border:'2px solid white', borderRadius:'50%', padding:'20px', fontSize:'20px'}}>
        <h2>my</h2>
        <h2>Cart</h2>
        </div>
        
  <div className="container p-4 pb-0" style={{marginLeft:'30vw'}}>
    
  <h3  style={{fontWeight:'bold'}}>|| राज<img src="https://tse3.mm.bing.net/th?id=OIP.yqQYPjPJU-QmTkL_SnwfQgHaHw&pid=Api&P=0" alt="Logo" width="80" height="74" className="d-inline-block align-text-top mx-4" style={{borderRadius:'50%'}}/>भोग ||</h3>
  <h4 className='text-center'>Enjoy Delicious Meal..</h4>
  </div>
       
        </div>
</nav>

      
      {
        item.items.map((ele,i)=> <div style={{display:'flex', margin:'5vh 5vw'}}> 

<div style={{border:'1px solid white'}}>
          <img src={ele.url} alt="item image"  style={{borderRadius:'50%', width:'10vw'}}/>
</div>

<div style={{marginLeft:'2vw',border:'1px solid white', width:'70vw', display:'flex',  alignItems:'center'}}>
        <p style={{marginLeft:'10vw', width:'20vw'}}>{i+1} - {ele.name}</p>

        <p style={{marginLeft:'1vw'}}>{ele.price} x {ele.quantity} = {(ele.price * ele.quantity)} </p>
       
        </div>
        {/* {
          total+=ele.price
        } */}
        </div>
        
        )
      }
      <div style={{height:'15vh', width:'90%', border:'1px solid yellow', display:'flex', justifyContent:'space-evenly', alignItems:'center',margin:'2vh 5vw'}}>
        <h3> total Bill Amt. :</h3>
        <h3>{total}</h3>
        </div>

        <button className="btn btn-success text-center" style={{margin:'5% 35%', width:'20vw', fontSize:'20px', fontWeight:'bold'}} onClick={()=>alert('success ! Your order has been placed. Enjoy your food..')}>Place Order !</button>

      <div className='Footer sticky-bottom' style={{marginTop:'95vh'}}>
      <Footer/>
      </div>

      
    </div>
  )
}

export default Checkout
