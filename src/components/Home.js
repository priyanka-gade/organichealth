import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
function Home(){
    return(
        <div>
            <div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"images/Sweetest.webp"}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"images/organic.jpg"}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
            <div className='homediv'>
                <h1 style={{color:'rgb(229, 21, 21)'}}>Welcome to Fresh & Healthy world</h1>
                <div className='row cardrow'>
                    <Card style={{ width: '28rem', border:'none' }} className='cd1'>
                    <Card.Img src={process.env.PUBLIC_URL+"images/benefits1.png"}/>
                    </Card>

                    <Card style={{ width: '28rem',border:'none' }} className='cd1'>
                    <Card.Img src={process.env.PUBLIC_URL+"images/benefits1a.png"}/>
                    </Card>
                    
                    <Card style={{ width: '28rem',border:'none', textAlign:'justify'}}>
                    <Card.Body><h2 style={{color:' rgb(29, 173, 63)'}}>Fruits and Vegetables?</h2>
                        <h6>Fruits and vegetables are classified from both a botanical and culinary standpoint.<br/><br/> 
                            The botanical classification is based on the plant’s physiological characteristics, like its structure, function and organisation.
                            A botanical fruit has at least one seed and grows from the flower of the plant. Examples of botanical fruits include apples, strawberries, peaches, but also tomatoes, cucumbers and peppers.<br/><br/>
                            The culinary classification is based on the way the plants are used and their flavour profiles. Culinary fruits have a softer texture, tend to be either sweet or tart and are often enjoyed raw or in desserts or jams. In contrast, a culinary vegetable usually has a tougher texture, blander taste and often requires cooking.
                            </h6>
                    </Card.Body>
                    </Card>
                </div>
                <img src="./images/fruit.jpg" alt="fruit cart" style={{width:'600px',margin:'20px', marginLeft:'100px', marginTop:'50px', marginBottom:'30px'}}></img>
                <div className='cardrow' style={{width:'700px', textAlign:'start', backgroundColor:'rgb(247, 246, 246)', padding:'20px', marginTop:'40px', float:'left'}}>
                    <h3><b>Fruit and vegetables for good health</b></h3>
                    <h4>Fruits and vegetables are low in fat, salt and sugar. They are a good source of dietary fibre, which can make you feel fuller for longer and prevent overconsumption of food. As part of a well-balanced, healthy diet and an active lifestyle, a high intake of fruit and vegetables can help you to:</h4>
                    <h5>- Reduce obesity and maintain a healthy weight.<br/>
                    - Lower your cholesterol.<br/>
                    - Lower your blood pressure.</h5>

                </div>
                <img src="./images/th.jpg" alt="fruit cart" style={{width:'600px',margin:'20px', marginLeft:'100px', marginTop:'50px', marginBottom:'30px'}}></img>
                <div className='cardrow' style={{width:'700px', textAlign:'start', backgroundColor:'rgb(247, 246, 246)', padding:'20px', marginTop:'40px',float:'right'}}>
                    <h3><b>Vitamins and minerals in fruit and vegetables</b></h3>
                    <h4>Fruits and vegetables contain many vitamins and minerals that are good for your health. Many of these are antioxidants, and may reduce the risk of many diseases:</h4>
                    <h5>- vitamin A (beta-carotene)<br/>
                    - vitamin C<br/>
                    - vitamin E<br/>
                    - magnesium<br/>
                    - zinc<br/>
                    - phosphorous<br/>
                    - folic acid.</h5>

                </div>
            </div>
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
export default Home;