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

  const [showDateRange, setShowDateRange] = useState(false);
  const [people, setPeople] = useState({ adults: 0, children: 0, room: 0 });
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
              onClick={() => setShowDateRange(!showDateRange)}
              className='headerSearchText'
            >
              {format(state[0].startDate, 'MM/dd/yyyy')} to{' '}
              {format(state[0].endDate, 'MM/dd/yyyy')}
            </span>
            {showDateRange && (
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
            <span className='headerSearchText'>
              {`${people.adults} adults ${people.children} children ${people.room} room`}{' '}
            </span>
            <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adults</span>
                <button className='optionCounterButton'>-</button>
                <span className='optioncounterNumber'>1 </span>
                <button className='optionCounterButton'>+</button>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <button className='optionCounterButton'>-</button>
                <span className='optioncounterNumber'>1 </span>
                <button className='optionCounterButton'>+</button>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <button className='optionCounterButton'>-</button>
                <span className='optioncounterNumber'>1 </span>
                <button className='optionCounterButton'>+</button>
              </div>
            </div>
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
