import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from '../Slices/Thalislice'



const Custommenu = () => {

  const menu = [
    {
      id: "1",
      name: "roti",
      url:"https://tse4.mm.bing.net/th?id=OIP.UlaywexhuKvZJeuOYvXOcAHaFj&pid=Api&P=0",
      quantity: 1,
      price: 12,
    },
    {
      id: "2",
      name: "rice",
      url:"https://tse4.mm.bing.net/th?id=OIP.jnrxsy-RVf-Db3zYsw6AKAHaE8&pid=Api&P=0",
      quantity: 1,
      price: 130,
    },
    {
      id: "3",
      name: "dal",
      url:"https://tse4.mm.bing.net/th?id=OIP.--dkMZoP9jBVYQ5yvTLn-AHaEK&pid=Api&P=0",
      quantity: 1,
      price: 120,
    },
    {
      id: "4",
      name: "shreekhand",
      url:"https://tse2.mm.bing.net/th?id=OIP.VDqaVmY2oTsNgD7MmH3tfwHaG7&pid=Api&P=0",
      quantity: 1,
      price: 80,
    },
    {
      id: "5",
      name: "pickle",
      url:"https://tse3.mm.bing.net/th?id=OIP.O-tVcdPokeL6GBvmmp1CdAHaFy&pid=Api&P=0",
      quantity: 1,
      price: 0,
    },
    {
      id: "6",
      name: "basundi",
      url:"https://tse2.mm.bing.net/th?id=OIP.RBYi7J25Y9p0kwtFuU1yZQHaEZ&pid=Api&P=0",
      quantity: 1,
      price: 90,
    },
    {
      id: "7",
      name: "paneerTikka",
      url:"https://tse1.mm.bing.net/th?id=OIP.1pwMm6vZ8okexB2PbBJDkgHaEK&pid=Api&P=0",
      quantity: 1,
      price: 200,
    },
    {
      id: "8",
      name: "paneerKofta",
      url:"https://tse3.mm.bing.net/th?id=OIP.qrey7Gu9ac5K8oS_wyootAHaEA&pid=Api&P=0",
      quantity: 1,
      price: 180,
    },
  ]


  const item = useSelector((state) => state.customThali);
  
  const dispatch = useDispatch();
  

  return (
    <div>
      
      <div className="row m-4 text-dark">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Roti / Chapati</h5>
        <p className="card-text">Chapati also known as roti, rotli, safati, shabaati, phulka , (in East Africa) chapo, (in Marathi) poli, and (in the Maldives) roshi, is an unleavened flatbread originating from the Indian subcontinent. </p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[0]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[0]))}>Remove</button>
        <p>₹ - 12 /-</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Rajdhani Rice</h5>
        <p className="card-text">Paneer Kofta is a unique dish that includes the goodness of raisins and khoya. You also need cornflour, green chili, ginger, lemon juice, salt, and coriander leaves to prepare it..</p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[1]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[1]))}>Remove</button>
        <p>₹ - 130 /-</p>
      </div>
    </div>
  </div>
</div>

      <div className="row m-4 text-dark">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Dal Makhni</h5>
        <p className="card-text">Dal makhani is a typical vegetarian dish originating from Punjab and widespread in India. It is prepared from black lentils, red beans, tomato puree, spices and clarified butter (ghee). </p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[2]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[2]))}>Remove</button>
        <p>₹ - 120 /- </p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Shreekhand</h5>
        <p className="card-text">Shrikhand is a popular Indian yogurt-based dessert, combined with sugar and fruits in order to develop a rich, creamy texture and sweet flavor. </p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[3]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[3]))}>Remove</button>
        <p>₹ - 80 /-</p>
      </div>
    </div>
  </div>
</div>

      <div className="row m-4 text-dark">
      <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pickle</h5>
        <p className="card-text">Pickle is made from the mango.</p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[4]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[4]))}>Remove</button>
        <p>Free (Complementry) /-</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Basundi</h5>
        <p className="card-text">Basundi is a popular Indian dessert consisting of sweetened, thickened milk with the addition of chopped nuts such as almonds, cashews, and pistachios. The dessert is usually flavored with cardamom and saffron. </p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[5]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[5]))}>Remove</button>
        <p>₹ - 90 /-</p>
      </div>
    </div>
  </div>
  
</div>

<div className="row m-4 text-dark">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Paneer Tikka Masala</h5>
        <p className="card-text">Paneer Tikka Masala is exotic, spicy and aromatic Indian gravy. In the dish grilled paneer pieces are dipped in spicy and creamy gravy with tomato, capsicum, and onion being the main ingredients. </p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[6]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[6]))}>Remove</button>
        <p>₹ - 200 /-</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Paneer Kofta</h5>
        <p className="card-text">Paneer Kofta is a unique dish that includes the goodness of raisins and khoya. You also need cornflour, green chili, ginger, lemon juice, salt, and coriander leaves to prepare it..</p>
        <button className="btn btn-success m-2" onClick={()=>dispatch(addItems(menu[7]))}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(addItems(menu[7]))}>Remove</button>
        <p>₹ - 180 /-</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Custommenu;
