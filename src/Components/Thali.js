import React,{useState, useEffect}  from 'react'
import Custommenu from './Custommenu'
import Footer from './Footer'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'


const Thali = () => {

  const navigate = useNavigate();


  const handleCheckout = ()=>{
    navigate("/chekout")

  }
  const [list, setList] = useState([]);

  const item = useSelector((state) => state.customThali);
  
  // const dispatch = useDispatch();
  const lastData=()=>{
    var ele=item.items;
    var ids=[];
    var obj={};
    for(var i=0;i<ele.length;i++)
    {
      var x=ele[i].id;
      ids.push(x);
    }
    for(var j=0;j<ids.length;j++)
    {
      if(obj[ids[j]]==undefined)
      {
        obj[ids[j]]=1;
      }
      else{
        obj[ids[j]]++;
      }
    }
    
    var idsArr=Object.keys(obj)
    var numArr=Object.values(obj)
    // console.log(idsArr)
    var singleEle=[];
    for(var k=0;k<idsArr.length;k++)
    {
      for(var t=0;t<ele.length;t++)
      {
        if(idsArr[k]===ele[t].id)
        {
         
          singleEle.push(ele[t]);
          break;
        }
      }
    }
    console.log(list)
    setList(singleEle);
  
  }

  useEffect(()=>{
    lastData();
  },[item.items.length])


  
  return (
    <div className='bg-light'>
      
      <Navbar/>

      <div className="card text-center my-4 bg-dark text-light">
  <div className="card-header">
   ! | स्वागतम शुभ स्वागतम | !
  </div>
  <div className="card-body">
    <h5 className="card-title"> - Menu - </h5>
    <p className="card-text">Please call during business hours for menu details and seasonal availability or check our Instagram for daily menu posting.</p>

    <div className='my-4 container' style={{display:'flex', justifyContent:'center'}}>
    <ul className="list-group list-group-horizontal">
  <li className="list-group-item mx-2">Vegan</li>
  <li className="list-group-item mx-2">Vegetarian</li>
  <li className="list-group-item mx-2">Non-Vegetarian</li>
  <li className="list-group-item mx-2">Drinks</li>
</ul>
</div>

<br />
    <a href="/" className="btn btn-success m-4" style={{fontWeight:'bold'}}>Order Online!</a>
  </div>
  <div className="card-footer text-muted" style={{display:'flex', justifyContent:'space-evenly'}}>
    <div className="lunch text-light">
      <h4>LUNCH</h4>
    <p>10am - 2pm</p>
</div>
    
    <div className="lunch text-light">
      <h4>DINNER</h4>
    <p>5pm - 9pm</p>
</div>
  </div>
</div>


<div className="card text-center my-4 bg-dark text-light">
  <div className="card-header">
   <h3> Custom Your Thali </h3> 
  </div>
  <div className="card-body">
    {/* <div className="selectedItems m-4" style={{height:'10vh', border:'1px solid white'}}>

    </div> */}
{
  item.items.map((ele,i)=>
  <span key={i}>
<img src={ele.url} alt=""  style={{borderRadius:'50%', width:'10vw'}}/>
  </span>
)
}
   <Custommenu/>

<br />
    <button type='button' className="btn btn-success m-4" style={{fontWeight:'bold'}} onClick={handleCheckout}>Checkout</button>
  </div>
  <div className="card-footer border-light text-muted" style={{display:'flex', justifyContent:'space-evenly'}}>
    <div className="lunch text-light">
      <h4>LUNCH</h4>
    <p>10am - 2pm</p>
</div>
    
    <div className="lunch text-light">
      <h4>DINNER</h4>
    <p>5pm - 9pm</p>
</div>
  </div>
</div>





<Footer/>
    </div>
  )
}

export default Thali
