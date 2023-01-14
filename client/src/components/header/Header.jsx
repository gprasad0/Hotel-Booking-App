import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
const Header = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showOptions, setShowOptions] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [optionData, setOptionsData] = useState({
    adults: 0,
    children: 0,
    room: 0,
  });

  const handleOption = (name, operation) => {
    console.log('name', optionData, name, operation);
    setOptionsData((prevState) => {
      return {
        ...prevState,
        [name]: operation === 'i' ? prevState[name] + 1 : prevState[name] - 1,
      };
    });
  };

  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
        <p className='headerDesc'>
          Get rewarded for travels - unlock nstant savings of 10% or more with a
          free booking account
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span
              onClick={() => setShowDate(!showDate)}
              className='headerSearchText'
            >
              {format(state[0].startDate, 'MM/dd/yyyy')} to{' '}
              {format(state[0].endDate, 'MM/dd/yyyy')}
            </span>
            {showDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='date'
              />
            )}
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span
              onClick={() => setShowOptions(!showOptions)}
              className='headerSearchText'
            >
              {`${optionData.adults} adults ${optionData.children} children ${optionData.room} room`}{' '}
            </span>
            {showOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adults</span>
                  <div className='optionCounter'>
                    <button
                      disabled={optionData.adults <= 0 ? true : false}
                      className='optionCounterButton'
                      onClick={() => handleOption('adults', 'd')}
                    >
                      -
                    </button>
                    <span className='optioncounterNumber'>
                      {optionData.adults}
                    </span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('adults', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className='optionText'>Children</span>
                  <div className='optionCounter'>
                    <button
                      disabled={optionData.children <= 0 ? true : false}
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span className='optioncounterNumber'>
                      {optionData.children}
                    </span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <div className='optionCounter'>
                    <button
                      disabled={optionData.room <= 0 ? true : false}
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span className='optioncounterNumber'>
                      {optionData.room}
                    </span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='headerSearchItem'>
            <span className='headerBtn'>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
