import React from 'react'
import "./Home.css"
import {Button} from '../Button.js'


function Home() {
  return (
    <div className='Home'>
        <h1>OTIO</h1>
        <div className='Slogan'>
            <b>HOME FOR THE UNDERRATED</b>
        </div>
        <div className='Introduction'>
            
            <div className='SubHeading'>
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
                        </p>
                        <p>
                            POST REVIEWS
                        </p>
                        <p>
                            OR BE REVIEWED 
                        </p>
                    </p>
                </p>
            </div>
           
        </div>
        <div className='Location'>
            <div className='LocationText'>
                <h3>LONDON BASED COMPANY</h3>
            </div>
        </div>
            

    </div>
  )
}

export default Home