import React from 'react'
import "./Home.css"
import SearchBar from '../SearchBar'
import Barber from '../../Images/Barber.svg'
import locationPin from '../../Images/Location.svg'
import Booking from '../../Images/Booking.svg'

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
              <SearchBar placeholder="Location...">
                <img className='locationPin' src={locationPin} alt="locationPin">

                </img>
              </SearchBar>
            </article>
            <article className='testimonial'>
              <div className='Location'>
                <div className='LocationText'>
                  <h3 className='LocationTitle'>MAKE BOOKING SIMPLER</h3>
                    <p className='LocationPara'>
                      Reduce hassle and cut the calls, messages and book your sessions within minutes using our simplified scheduler. Simply find a free slot, book and pay.
                    </p>
                </div>
              </div>
            </article>
            <article className='testimonial'>
              <img className='Booking' src={Booking} alt="Booking">
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
        <main className='placeholder-grid'>
          <article className='placeholder'>
            <img className='Barber' src={Barber} alt="Barber">
            </img>
          </article>
          <article className='placeholder'>
            <h1 className='whatBook'>
              WHAT CAN YOU BOOK?
            </h1>
            <p className='bookingDetails'>
              Book an appointment for hair, nails, makeup and waxing services in just a few clicks. Save time by having the services you need booked within a minutes!
            </p>
          </article>
          <article className='placeholder'>
            
          </article>
          <article className='placeholder'>
            
          </article>
        </main>
      </section>
            

    </div>
  )
}

export default Home