import React from 'react'
import "./Home.css"
import {Button} from '../Button.js'


function Home() {
  return (
    <div className='Home'>
        <h1>OTIOSORUM</h1>
        <div className='Slogan'>
            <b>HOME FOR THE UNDERRATED</b>
        </div>
        <div className='Introduction'>
            <img className='London' src='../images/London.png' alt="London"></img>
            <div className='SubHeading'>
                <h3 className='Subtitle'>
                    KNOW YOUR FAVOURITES
                </h3>
                <p className='KnowParagraph'>
                    <p>
                        WITH OTIO UNDERSTAND BE UNDERSTOOD AS A BRAND 
                    </p>
                    <p>
                        NEVER MISS A STEP IN QUALITY ASSURANCE
                    </p>
                    <p>
                        SIGN UP TO NOW
                    </p>
                    <p className='Coloured'>
                        <p>
                            READ 
                        </p>
                        <p>
                            POST 
                        </p>
                        <p>
                            OR BE REVIEWED 
                        </p>
                    </p>
                </p>
            </div>
            
           
        </div>
    </div>
  )
}

export default Home