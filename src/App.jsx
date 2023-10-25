import { useState } from 'react';
import { Tooltip } from 'react-tooltip'

import ActionsPanel from './components/ActionsPanel/ActionsPanel';
import Item from './components/Item/item';


import InsertCoin from './assets/insert-coin.png';
import Choice from './assets/choice.png';
import TakeItem from './assets/take-away.png';
import Candy from './assets/products/candy.png';
import Chips from './assets/products/chips.png';
import Chocolate from './assets/products/chocolate.png';
import Cookies from './assets/products/cookies.png';
import HotDrink from './assets/products/hot_drink.png';
import Juice from './assets/products/juice.png';
import Milk from './assets/products/milk.png';
import Soda from './assets/products/soda.png';
import Water from './assets/products/water.png';

import './App.scss';


function App() {

  const [products, onSetProducts] = useState(burnedProducts);
  const [screen, onSetScreen] = useState('');
  const [selectedProduct, onSetSelectedProduct] = useState({});

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
        <span className='HowToUse__BottomText'>- Enjoy your product -</span>
      </section>
      <div className='VendingMachine__Panel'>
        <section className='ProductsContainer'>
          {products.map((item) => (
            <Item
              key={`Item-${item.name}-${item.id}`}
              name={item.name}
              price={item.price}
              image={item.image}
              screen={screen}
              onSetScreen={onSetScreen}
            />
          ))}
        </section>
        <section className='VendingMachine__Actions'>
          <ActionsPanel 
            selectedProduct={selectedProduct}
            img={Cookies}
          />
        </section>
      </div>
      <Tooltip id="coin" />
    </div>
  );
}

export default App;

const burnedProducts = [
  {
    id: 1,
    name: 'Water',
    price: 0.65,
    image: Water,
  }, {
    id: 2,
    name: 'Juice',
    price: 1.00,
    image: Juice,
  }, {
    id: 3,
    name: 'Soda',
    price: 1.50,
    image: Soda,
  }, {
    id: 4,
    name: 'Hot drink',
    price: 2.00,
    image: HotDrink,
  }, {
    id: 5,
    name: 'Cookies',
    price: 1.50,
    image: Cookies,
  }, {
    id: 6,
    name: 'Chips',
    price: 0.70,
    image: Chips,
  }, {
    id: 7,
    name: 'Candy',
    price: 0.25,
    image: Candy,
  }, {
    id: 8,
    name: 'Chocolate',
    price: 1.85,
    image: Chocolate,
  },
  //  {
  //   id: 9,
  //   name: 'Milk',
  //   price: 1.70,
  //   image: Milk,
  // },
];