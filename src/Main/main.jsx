import React from 'react';
import firstcar from "../components/images/firstcar.jpg";
import secondcar from "../components/images/02.jpg";
import thirdcar from "../components/images/03.jpg";
import seat from "../components/images/seat.png";
import suitcase from  "../components/images/suitcase.png";

import style from "../Main/main.scss";

function Main() {
  return (
    <div className='all-content'>
      <section className='title'>
        <p className='p-title'>
        Best car & van rentals from top suppliers
        </p>
        <p>
        Our suppliers provide both automatic and manual transmission vehicles in the US, however, availability may vary depending on the supplier and the location where you are renting the vehicle.
        </p>
      </section>
      <section className='cars-wrapper'>
        <img src={firstcar} alt="blueCar" />
        <div>
            <h2>Economy</h2>
            <div className='seat-img-wrapper'>
              <img src={seat} alt="seat" />
              <p>Seats: 4</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: 2</p>
            </div>
            <p>Quite popular with budget travelers visiting the US(usually for short term travel plans), economy cars fall in the category of low-cost rental solutions. Not only inexpensive these rental vehicles are also fuel-efficient.</p>
            <a href="/"><button>Book now</button>
</a>

        </div>
      </section>
      <section className='cars-wrapper'>
        <img src={secondcar} alt="blueCar" />
        <div>
            <h2>Luxury</h2>
            <div className='seat-img-wrapper'>
              <img src={seat} alt="seat" />
              <p>Seats: 4</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: 2</p>
            </div>
            <p>Customers visiting America rent luxury cars for business, vacations and other special life occasions like anniversaries. They are used mainly for the comfort and the style quotient they add to the trip.</p>
            <a href="/"><button>Book now</button></a>
        </div>
      </section>
      <section className='cars-wrapper'>
        <img src={thirdcar} alt="blueCar" />
        <div>
            <h2>Convertible</h2>
            <div className='seat-img-wrapper'>
              <img src={seat} alt="seat" />
              <p>Seats: 4</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: 2</p>
            </div>
            <p>Quite popular with budget travelers visiting the US(usually for short term travel plans), economy cars fall in the category of low-cost rental solutions. Not only inexpensive these rental vehicles are also fuel-efficient.</p>
            <a href="/"><button>Book now</button></a>
        </div>
      </section>
      <div className='plink-wrapper'>
        <p>Images from <a href="/">Freepik</a></p>
      </div>
    </div>
  )
}

export default Main
