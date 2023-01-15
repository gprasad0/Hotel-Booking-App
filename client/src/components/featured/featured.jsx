import './featured.css';

export const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o='
          className='featuredImg'
        ></img>
        <div className='fetauredTitles'>
          <h1>Goa</h1>
          <h2>100 Properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://q-xx.bstatic.com/xdata/images/city/250x250/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o='
          className='featuredImg'
        ></img>
        <div className='fetauredTitles'>
          <h1>Mumbai</h1>
          <h2>123 Properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://q-xx.bstatic.com/xdata/images/city/250x250/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o='
          className='featuredImg'
        ></img>
        <div className='fetauredTitles'>
          <h1>Bangalore</h1>
          <h2>125 Properties</h2>
        </div>
      </div>
    </div>
  );
};
