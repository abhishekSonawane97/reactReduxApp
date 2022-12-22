import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
// import { addItems } from '../Slices/Thalislice'

const Checkout = () => {
  let [total, setTotal] = useState(0);
  let [list, setList] = useState([]);
  const item = useSelector((state) => state.customThali);
  console.log(item.items);

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
      var s=[]
      for(var t=0;t<ele.length;t++)
      {
        if(idsArr[k]===ele[t].id)
        {
          s.push(ele[t]);
          s.push(numArr[k]);
          break;
        }
      }
      singleEle.push(s);
    }
    console.log(singleEle)
    setList(singleEle);

    var elePrice=0
    for(var i=0;i<list.length;i++)
    {
      var elePrice=elePrice+list[i][0].price*list[i][1]
    }
   setTotal(elePrice)
  }

  useEffect(()=>{
    lastData();
  },[list.length])

  // const dispatch = useDispatch();
  return (
    <div className="bg-dark text-light" style={{ marginBottom: "20px" }}>
      {/* <div className="container bg-dark text-light" style={{border:'1px solid white', padding:'20px'}}>
        <h2>my</h2>
        <h2>Cart !</h2>
      </div> */}

      <nav
        className="navbar navbar-dark"
        height="100"
        style={{ background: "black" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="m-4 text-center"
            style={{
              border: "2px solid white",
              borderRadius: "50%",
              padding: "20px",
              fontSize: "20px",
            }}
          >
            <h2>my</h2>
            <h2>Cart</h2>
          </div>

          <div className="container p-4 pb-0" style={{ marginLeft: "30vw" }}>
            <h3 style={{ fontWeight: "bold" }}>
              || राज
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.yqQYPjPJU-QmTkL_SnwfQgHaHw&pid=Api&P=0"
                alt="Logo"
                width="80"
                height="74"
                className="d-inline-block align-text-top mx-4"
                style={{ borderRadius: "50%" }}
              />
              भोग ||
            </h3>
            <h4 className="text-center">Enjoy Delicious Meal..</h4>
          </div>
        </div>
      </nav>

{/* list=[[{ele},number],[{ele},number],[{ele},number]] */}

{
//         item.items.map((ele,i)=> <div style={{display:'flex', margin:'5vh 5vw'}}> 

// <div style={{border:'1px solid white'}}>
//           <img src={ele.url} alt="item image"  style={{borderRadius:'50%', width:'10vw'}}/>
// </div>

// <div style={{marginLeft:'2vw',border:'1px solid white', width:'70vw', display:'flex',  alignItems:'center'}}>
//         <p style={{marginLeft:'10vw', width:'20vw'}}>{i+1} - {ele.name}</p>

//         <p style={{marginLeft:'1vw'}}>{ele.price} x {ele.quantity} = {(ele.price * ele.quantity)} </p>
       
//         </div>
//         {/* {
//           total+=ele.price
//         } */}
//         </div>
        
//         )
      }

      {list && list.map((ele, i) => (

<div style={{display:'flex', margin:'5vh 5vw'}}> 

 <div style={{border:'1px solid green', borderRadius:'15px'}}>
           <img src={ele[0].url} alt="item image"  style={{borderRadius:'50%', width:'10vw'}}/>
 </div>

 <div style={{marginLeft:'2vw',border:'1px solid grey',borderRadius:'15px', width:'70vw', display:'flex',  alignItems:'center'}}>
         <p style={{marginLeft:'10vw', width:'20vw'}}>{i+1} - {ele.name}</p>

         <p style={{marginLeft:'1vw'}}>{ele[0].price} x {ele[1]} = {(ele[0].price * ele[1])}{' '} ₹ / -</p>
       
         </div>
         {/* {
//           total+=ele.price
//         } */}
         </div>
      ))}
      <div
        style={{
          height: "15vh",
          width: "90%",
          border: "1px solid white",
          borderRadius:'15px',
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "2vh 4vw",
        }}
      >
        <h3> total Bill Amt. :</h3>
        <h3>Rupee : {total} ₹ / -</h3>
      </div>

      <button
        className="btn btn-success text-center"
        style={{
          margin: "5% 35%",
          width: "20vw",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={() =>
          alert("success ! Your order has been placed. Enjoy your food..")
        }
      >
        Place Order !
      </button>

      <div className="Footer sticky-bottom" style={{ marginTop: "95vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
