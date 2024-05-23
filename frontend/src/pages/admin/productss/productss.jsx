import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from "axios"


const Productss = () => {
  const { data, setdata } = useContext(MainContext)
  function DeleteItem(_id) {
    axios.delete(`http://localhost:8080/api/vine/${_id}`)
    const target = data.find((item) => item._id == _id);
    const targetOfIndex = data.indexOf(target);
    data.splice(targetOfIndex, 1)
    setdata([...data])
  }
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col ">Delete</th>


          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.image} alt="" width={"60px"} height={"60px"} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button onClick={() => {
                  DeleteItem(item._id);
                }} className='btn btn-danger'>Delete</button></td>

              </tr>
            ))}

        </tbody>
      </table>
    </div>
  )
}

export default Productss