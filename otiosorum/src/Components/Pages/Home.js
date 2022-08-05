import React from 'react'
import "./Home.css"
import SearchBar from '../SearchBar'
import Barber from '../../Images/Barber.svg'

function Home() {
  return (
    
    <div className='Home'>
      <section class="one">
      
      <main className='testimonial-grid'>
            <article className='testimonial'>
              <h1 class='Company'>BOOK A SESSION NOW</h1>
                  
            </article>
            <article className='testimonial'>
              <SearchBar placeholder="Profession..."/>
            </article>
            <article className='testimonial'>
              <SearchBar placeholder="Location..."/>
            </article>
            <article className='testimonial'>
              <div className='Location'>
                <div className='LocationText'>
                  <h3 className='LocationTitle'>MAKE BOOKING SIMPLER</h3>
                    <p className='LocationPara'>
                      
                    </p>
                </div>
              </div>
            </article>
            <article className='testimonial'>
              <img className='Barber' src={Barber} alt="Barber">

              </img>
            </article>
            
          </main>
        
        <div className='Introduction'>
                <h3 className='Subtitle'>
                </h3>
                <p className='KnowParagraph'>
                </p>
        </div>
      </section>
      <section class="two">
        
      </section>
            

    </div>
  )
}

export default Home