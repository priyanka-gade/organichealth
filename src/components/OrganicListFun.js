import { useEffect, useState } from "react";

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
            {
                data
                ?
                <div>
                    {
                        data.map((item,i)=>
                    <div key={i}>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                        <span>{item.password}</span>
                    </div>
                    )
                    }
                </div>
                :
                <p>Please Wait. . . . </p>
            }
        </div>
    )
}
export default OrganicListFun;