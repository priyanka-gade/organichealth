import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function OrganicListFun(){
    const[data,setdata]=useState(null)
    useEffect(()=>{
        getdata()
    },[])
    function getdata(){
         fetch("http://localhost:3000/organichealth").then((response)=>{
            response.json().then(result=>{
                                              setdata(result); 
                                            })
            })
    }
    getdata()

    return(
        <div>
            <h1>Organic lis using functional component</h1>
             <Form className="d-flex" style={{width:'300px', float:'right', marginRight:'150px'}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form><br/><br/><br/>
            <button className="btnstyle"><Link to='/create' className='createbtn'>Add new </Link></button>
            {
                data
                ?
                <div className="list-wrapper">
                     <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email-Id</th>
                            {/* <th>Password</th> */}
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((item,i)=>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.password}</td> */}
                                <td><Link to={"/update/"+item.id} className='txt'>Edit</Link><Link to={"/update/"+item.id} className='txt'>Delete</Link></td>

                            </tr>
                            )
                        }
                        </tbody>
                    </Table>            
                </div>
                :
                <p>Please Wait. . . . </p>
            }
        </div>
    )
}
export default OrganicListFun;