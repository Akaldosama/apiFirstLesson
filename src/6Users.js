import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Posts.css'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
      console.log(response)
      setUsers(response.data)
    })
  }, [])


  return (
    <div>
      <div className="wrapper">
        <div className="parent">
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, index) => {
              return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
                <td>{item.address.city}</td>
                <td>{item.email}</td>
              </tr>
            })
          }
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}
