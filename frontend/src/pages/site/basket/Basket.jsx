import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Basket = () => {
  const{basket}=useContext(MainContext)
  console.log(basket);
  return (
    <div>
       <Helmet>
        <title>Basket</title>
      </Helmet>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">İmage</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col">Total Price</th>
      <th scope="col">Delete</th>
      <th scope="col">Add</th>
    </tr>
  </thead>
  <tbody>
   { basket &&
    basket.map((item,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><img width={"60px"} height={"60px"} src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.count}</td>
      <td>{item.totalPrice}</td>
      <td><button className='btn btn-danger'>Delete</button></td>
      <td><button className='btn btn-warning'>Add</button></td>

    </tr>
    ))
   }

  </tbody>
</table>
    </div>
  )
}

export default Basket