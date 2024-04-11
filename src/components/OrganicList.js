import { Component} from "react";
class OrganicList extends Component{
    constructor(){
        super();
        this.state={
            list:null
        }
    }

componentDidMount()
{
        fetch("http://localhost:3000/organichealth").then((response)=>{
            response.json().then((result)=>{
                                                this.setState({list:result})
                                            })
            })
        
}

   render()
   {
        return(
        <div>
             <h1>Hello List</h1>
             {
                this.state.list
                ?
                <div>
                    {
                        this.state.list.map((item,i)=>
                        <div>
                            <span>{item.name}</span>
                        </div>
                    )
                    }
                </div>
                :
                <p>Please wait</p>
             }
        </div>
        )
    }
}
export default OrganicList;