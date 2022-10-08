import React from 'react'
import "./Home.css"
import {Button} from '../Button.js'


function Home() {
  return (
    <div className='Home'>
        <section class="One">
            <main className='section-grid'>
                <article className='Title'>
                <h1 className='companyName'>OTIO</h1>
                <div className='Slogan'>
                    <b>HOME FOR THE UNDERRATED</b>
                </div>
                </article>
                <article className='Description'>
                    <div className='Introduction'>
                        <h3 className='Subtitle'>
                            KNOW YOUR FAVOURITES
                        </h3>
                        <p className='KnowParagraph'>
                            <p>
                                WITH OTIO UNDERSTAND & BE UNDERSTOOD AS A BRAND 
                            </p>
                            <p>
                                NEVER MISS A STEP IN QUALITY ASSURANCE
                            </p>
                            <p>
                                SIGN UP NOW TO
                            </p>
                            <p className='Coloured'>
                                <p>
                                    READ REVIEWS
                                    <p>
                                        POST REVIEWS
                                        <p>
                                            OR BE REVIEWED 
                                        </p>
                                    </p>
                                </p>                      
                            </p>
                        </p>
                    </div>
                </article>
                <article className='Coloured'>

                </article>
            </main>    
        </section>
        <section class="two">
            <main className='section-grid2'>
                <article className='section-one'>
                <div className='Location'>
                    <div className='LocationText'>
                        <h3 className='LocationTitle'>LONDON BASED COMPANY</h3>
                        <p className='LocationPara'>A HOME-GROWN SERVICE PROVIDING USERS WITH A FRESH LOOK ON THE SMALLER BUSINESSES </p>
                        <div className='LondonImg'>
                    
                        </div>
                    </div>
                </div>
                </article>
            </main> 
        </section>        
            
         
    </div>
  )
}

export default Home