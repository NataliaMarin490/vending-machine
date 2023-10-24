import { useState } from 'react';

import Item from './components/Item/item';

import InsertCoin from './assets/insert-coin.png';
import Choice from './assets/choice.png';
import TakeItem from './assets/take-away.png';

import './App.scss';

function App() {

  const [products, onSetProducts] = useState(burnedProducts);

  return (
    <div className='VendingMachine'>
      <section className='HowToUse'>
        <h2>How to use?</h2>
        <div className='HowToUse__Container'>
          <div className='HowToUse__Instruction'>
            <span>1.</span>
            <img src={InsertCoin} alt='insertCoin' />
            <span>Insert the money by clicking on the equivalent button.</span>
          </div>
          <div className='HowToUse__Instruction'>
            <span>2.</span>
            <img src={Choice} alt='choice' />
            <span>Select your product (one at a time).</span>
          </div>
          <div className='HowToUse__Instruction'>
            <span>3.</span>
            <img src={TakeItem} alt='pick' />
            <span>Pick up your product and money if applicable.</span>
          </div>
        </div>
        <div className='HowToUse__ExtraInfo'>
          <i className="fas fa-info-circle"></i>
          <span>
            Press <em>Return Coin</em> if you want to get your money back.
          </span>
        </div>
      </section>
      <div className='VendingMachine__Panel'>
        <section className='ProductsContainer'>
          {products.map((item) => (
            <Item
              key={`Item-${item.name}-${item.id}`}
              name={item.name}
              price={item.price}
            />
          ))}
        </section>
        <section className='VendingMachine__Actions'>
          <div className='Screen'>Screen</div>
          <div className='Buttons'> buttons</div>
        </section>
      </div>
    </div>
  );
}

export default App;

const burnedProducts = [
  {
    id: 1,
    name: 'Water',
    price: 0.65,
  }, {
    id: 2,
    name: 'Juice',
    price: 1.00,
  }, {
    id: 3,
    name: 'Soda',
    price: 1.50,
  }, {
    id: 4,
    name: 'Milk',
    price: 1.70,
  }, {
    id: 5,
    name: 'Hot drink',
    price: 2.00,
  }, {
    id: 6,
    name: 'Cookies',
    price: 1.50,
  }, {
    id: 7,
    name: 'Chips',
    price: 0.70,
  }, {
    id: 8,
    name: 'Candy',
    price: 0.25,
  }, {
    id: 9,
    name: 'Chocolate bar',
    price: 1.85,
  }
];