import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Table from 'react-bootstrap/Table';
import './table.css'
import MyModal from './modal';

const MyTable = () => {
    const [data, setData] = useState([
        {
            firstName: "Saroj",
            lastName: "Gautam",
            address: "Bardaghat"
        },
        {
            firstName: "Sudarshan",
            lastName: "Phullel",
            address: "Argakhanchi"
        },
        {
            firstName: "Sunil",
            lastName: "Gautam",
            address: "Shankarnagar"
        },
        {
            firstName: "Niraj",
            lastName: "Gyawali",
            address: "Dovan"
        }
    ]);

  const handleCellClick = () => {
    return <MyModal />
  };

    return (
        <div>
            <h1>This is table</h1>
            <Table id="myTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (  
                        <tr key={index} >
                            <td onClick={handleCellClick}>{index + 1}</td>
                            <td onClick={handleCellClick}>{item.firstName}</td>
                            <td onClick={handleCellClick}>{item.lastName}</td>
                            <td onClick={handleCellClick}>{item.address}</td>
                        </tr>
                    ))}
                        
                </tbody>
            </Table>
        </div>
    )
}

export default MyTable