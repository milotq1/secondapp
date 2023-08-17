import React from 'react';
import firstcar from "../components/images/firstcar.jpg";
import secondcar from "../components/images/02.jpg";
import thirdcar from "../components/images/03.jpg";
import seat from "../components/images/seat.png";
import suitcase from  "../components/images/suitcase.png";
import "../Main/main.scss";


const economyCarProps = {
  seats: 4,
  suitcase: 2,
  description: "Quite popular with budget travelers visiting the US (usually for short term travel plans), economy cars fall in the category of low-cost rental solutions. Not only inexpensive, these rental vehicles are also fuel-efficient."
};

const luxuryCarProps = {
  seats: 5,
  suitcase: 2,
  description: "Customers visiting America rent luxury cars for business, vacations and other special life occasions like anniversaries. They are used mainly for the comfort and the style quotient they add to the trip."
};

const convertibleCarProps = {
  seats: 4,
  suitcase: 2,
  description: "Convertible cars are perfect for those who want to enjoy the open road and the wind in their hair. They offer a unique driving experience and are ideal for leisurely drives along scenic routes."
};

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
              <p>Seats: {economyCarProps.seats}</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: {economyCarProps.suitcase}</p>
            </div>
            <p>{economyCarProps.description}</p>
            <a href="/"><button>Book now</button> </a>

        </div>
      </section>
      <section className='cars-wrapper'>
        <img src={secondcar} alt="blueCar" />
        <div>
            <h2>Luxury</h2>
            <div className='seat-img-wrapper'>
              <img src={seat} alt="seat" />
              <p>Seats: {luxuryCarProps.seats}</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: {luxuryCarProps.suitcase}</p>
            </div>
            <p>{luxuryCarProps.description}</p>

            <a href="/"><button>Book now</button></a>
        </div>
      </section>
      <section className='cars-wrapper'>
        <img src={thirdcar} alt="blueCar" />
        <div>
            <h2>Convertible</h2>
            <div className='seat-img-wrapper'>
              <img src={seat} alt="seat" />
              <p>Seats: {convertibleCarProps.seats}</p>
              <img src={suitcase} alt="suitcase" />
              <p>Suitcase: {convertibleCarProps.suitcase}</p>
            </div>
            <p>{convertibleCarProps.description}</p>
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
