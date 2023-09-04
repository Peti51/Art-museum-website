import React, { useEffect, useState } from 'react';
import '../styles/Main.scss';
import minusSign from '../images/Tickets-minus-sign.png';
import plusSign from '../images/Tickets-plus-sign.png';
import { Header } from "./Header";

const times = [
  {
    date: 'Today',
    open: 'March 21, 2016 Open 10:30am-5:30pm',
    redposition: 0,
  },
  {
    date: 'Tomorrow',
    open: 'March 22, 2016 Open 10:30am-5:30pm',
    redposition: 40,
  },
  {
    date: 'Other',
    open: 'March 23, 2016 Open 10:30am-5:30pm',
    redposition: 80,
  },
];

const ageGroups = [
  {
    agegroup: 'Adults',
    condition: '',
  },
  {
    agegroup: 'Seniors',
    condition: '65+ with ID',
  },
  {
    agegroup: 'Students',
    condition: 'with ID',
  },
];

export const TicketContent = ({
  setIsMenuOpen,
  isMenuOpen,
  headerTitle,
  setHeaderTitle,
}) => {
  const [selectedTab, setSelectedTab] = useState(times[1].date);
  const [selectedTabDescription, setSelectedTabDescription] = useState(times[1].open);
  const [adultPrice, setAdultPrice] = useState(0);
  const [seniorPrice, setSeniorPrice] = useState(0);
  const [studentPrice, setStudentPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const tabChange = (tab, description) => {
    setSelectedTab(tab);
    setSelectedTabDescription(description);
  };

  const minusNumber = (age) => {
    if (age === 'Adults' && adultPrice !== 0) {
      setAdultPrice(adultPrice - 1)
    } else if (age === 'Seniors' && seniorPrice !== 0) {
      setSeniorPrice(seniorPrice - 1)
    } else if (age === 'Students' && studentPrice !== 0) {
      setStudentPrice(studentPrice - 1)
    }
  }

  const plussNumber = (age) => {
    if (age === 'Adults') {
      setAdultPrice(adultPrice + 1)
    } else if (age === 'Seniors') {
      setSeniorPrice(seniorPrice + 1)
    } else if (age === 'Students') {
      setStudentPrice(studentPrice + 1)
    }
  }

  useEffect(() => {
    const finalPrice = (adultPrice * 8) + (seniorPrice * 6) + (studentPrice * 4);

    setFinalPrice(finalPrice);
  }, [adultPrice, seniorPrice, studentPrice]); 

  return (
    <div className={`main-content ${isMenuOpen ? 'content-hidden' : ''}`}>
    <Header 
      setIsMenuOpen={setIsMenuOpen} 
      isMenuOpen={isMenuOpen} 
      headerTitle={headerTitle}
      setHeaderTitle={setHeaderTitle}
    />
    <div className="Tickets-big-container">
      <div className="title">
        <div className="title-container">
          <h2 className="title-title">
            Skip the Line. <br /> Purchase Tickets.
          </h2>
          <p className="title-description">
            All exhibitions, audio tours, and films <br/> included in the price of admission.
          </p>
        </div>
      </div>
      <div className='ticket'>
        <div className='ticket-tab-bigcontainer'>
          <div className='ticket-tab-container'>
            {times.map((item) => (
              <button
                className={
                  selectedTab === item.date
                    ? 'ticket-Content-tab ticket-Content-selected'
                    : 'ticket-Content-tab'
                }
                key={item.date}
                onClick={() => tabChange(item.date, item.open)}
              >
                {item.date}
              </button>
            ))}
          </div>
        </div>
        <div className='ticket-Content-tab-description'>
          {selectedTabDescription}
        </div>
        {ageGroups.map((item) => (
          <div key={item.agegroup} className='button-bigcontainer'>
            <div className='button-agegroup-container'>
              <p className='button-agegroup'>{item.agegroup}</p>
              <p className='button-condition'>{item.condition}</p>
            </div>
            <div className='button-container'>
              <button 
                className='button-minus-plus'
                onClick={() => minusNumber(item.agegroup)}
              >
                <img src={minusSign} alt='minus-sign' />
              </button>
              <div className='button-number-container'>
                <p className={`button-number 
                  ${item.agegroup === 'Adults' && adultPrice > 0 ? 'button-number-with-price' : ''} 
                  ${item.agegroup === 'Seniors' && seniorPrice > 0 ? 'button-number-with-price' : ''}
                  ${item.agegroup === 'Students' && studentPrice > 0 ? 'button-number-with-price' : ''}
                  `}
                >
                  {item.agegroup === 'Adults' && adultPrice}
                  {item.agegroup === 'Seniors' && seniorPrice}
                  {item.agegroup === 'Students' && studentPrice}
                </p>
              </div>
              <button 
                className='button-minus-plus'
                onClick={() => plussNumber(item.agegroup)}
              >
                <img src={plusSign} alt='plus-sign' />
              </button>
            </div>
          </div>
        ))}
        <div className='line'></div>
        <div className='ticket-price'>
          <p className='ticket-price-item'>Total</p>
          <p className='ticket-price-item'>$ {finalPrice}</p>
        </div>
        <button className='ticket-buying-button'>Continue to Payment</button>
      </div>
    </div>
  </div>
  )
};

