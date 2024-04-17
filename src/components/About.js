function About(){
    const list =[
                        'Keep fruit easy to reach.',
                        'Take fruits and vegetables with you to have as snacks.',
                        '(re)discover new or forgotten vegetables.',
                        'Check what is in season where you are (& try new recipes).',
                        'Swap your old favourites to increase variety.'
                    ];
    // const listitems = list.map(l => <li>{l}</li>);

    return(
        <div>
           <div className='summerydiv'>
            <h1 style={{textAlign:'center'}}>About </h1>
                <img src="./images/Fruits-and-Vegetables.jpg" alt="fruit cart" style={{width:'100%',marginBottom:'30px'}}></img>
            </div>
            <div className="abtdiv"> 
                    <h5>Fruits and vegetables are an essential part of a healthy diet. They are rich in nutrients and can lower our risk of chronic diseases such as cardiovascular diseases and certain cancers. 
                    Eating a variety of fruits and vegetables will help ensure that you are getting a range of nutrients. Whether you choose fresh or frozen or eat them in the morning or at night, fruits and vegetables are a great way to boost your health. 
                    Eating 400 g of fruits and vegetables a day may seem ambitious but here are some helpful tips to help you:</h5>
                    {/* <h5><ul>{listitems}</ul></h5> */}
                    {list.map(l => <h4>{l}</h4>)}
                </div>              
                <img src="./images/benefits3.png" alt="tips to eat more fruits and vegitables" style={{width:'900px',margin:'20px', marginLeft:'60px', marginTop:'50px'}}></img>
            
            <div className='row'>
                <div className='col'>
                    <img src='./images/Fresh-Healthy.jpg' alt='logo' style={{height:"100px", width:"200px"}}></img><br/>
                    <h5 style={{fontFamily: 'cursive'}}>Food facts for healthy choices..</h5>
                </div>
                <div style={{backgroundColor:'black', color:'white', paddingTop:'5px'}}>
                    <p>@CopyRight March 2024</p>
                </div>
            </div>
        </div>
    )
        
}
export default About;