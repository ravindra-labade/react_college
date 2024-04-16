import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [user, setUser] = useState([]);

    async function fetchData(){
        try{
            const result = await axios.get(' http://localhost:5000/users');
            setUser(result.data)
        }
        catch{
            alert('data incorrect')
        }
        
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
        <div className='container mt-5'>
                <table className='table table-info table-hover'>
                        <thead>
                                <th>SR NO</th>
                                <th>NAME</th>
                                <th>COLLEGE</th>
                                <th>CITY</th>
                                <th>ACTION</th>
                        </thead>
                        <tbody>
                            {
                                user.map((obj)=>{
                                    return(
                                        <tr>
                                            <td>{obj.sr}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.college}</td>
                                            <td>{obj.city}</td>
                                            <td>
                                                <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                                <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm me-3'>DELETE</button></NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
        </div>
  )
}

export default Show