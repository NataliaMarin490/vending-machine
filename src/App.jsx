import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import ActionsPanel from './components/ActionsPanel/ActionsPanel';

import InsertCoin from './assets/insert-coin.png';
import Choice from './assets/choice.png';
import TakeItem from './assets/take-away.png';
import Candy from './assets/products/candy.png';
import Chips from './assets/products/chips.png';
import Chocolate from './assets/products/chocolate.png';
import Cookies from './assets/products/cookies.png';
import HotDrink from './assets/products/hot_drink.png';
import Juice from './assets/products/juice.png';
// import Milk from './assets/products/milk.png';
import Soda from './assets/products/soda.png';
import Water from './assets/products/water.png';

import './App.scss';


function App() {

  const [products, onSetProducts] = useState(burnedProducts);
  const [availableCoins] = useState([0.05, 0.1, 0.25, 1.00]);
  const [credit, onSetCredits] = useState(0);
  const [error, onSetError] = useState(false);
  const [returnedMoney, onSetReturnedMoney] = useState([]);
  const [prevCredit, onSetPrevCredit] = useState(0);
  const [selectedProduct, onSetSelectedProduct] = useState({
    name: '',
    image: '',
  });

  useEffect(() => {
    if (credit !== 0) onSetError(false);
  }, [credit]);

  const onCalculateCreditToReturn = (value = 0, availableCoins = []) => {
    const orderedAvailableCoins = availableCoins.sort((a, b) => b - a); // sort values in descending order
    let coinsUsage = orderedAvailableCoins.map(() => 0); // create array with same length
    let result = [];
    for (let i = 0; i < orderedAvailableCoins.length; i++) {
      coinsUsage[i] = Math.floor(value / orderedAvailableCoins[i]); // integer part
      value = (value % orderedAvailableCoins[i]).toFixed(2); // decimal part
      if (value === 0) break;
    }
    coinsUsage.map((val, index) => {
      if (val !== 0) {
        result = [...result, `$${orderedAvailableCoins[index]}x${coinsUsage[index]} `];
      }
    });
    return result;
  };

  const onBuyProduct = item => {
    if (credit === 0 || item.price > credit) {
      onSetError(true);
      onSetPrevCredit(0);
      onSetReturnedMoney([]);
      onSetSelectedProduct({
        name: '',
        image: '',
      });
      return;
    }
    if (item.quantity > 0) {
      let newProducts = [...products];
      const itemIndex = products.findIndex((val) => (val.name === item.name) && val.price === item.price);
      newProducts[itemIndex].quantity -= 1;
      onSetProducts(newProducts);
      onSetSelectedProduct({
        name: item.name,
        image: item.image,
      });
      onSetCredits(credit - item.price);

      // To return credit right after purchase
      // onSetPrevCredit(credit);
      // const valueToReturn = onCalculateCreditToReturn(credit - item.price, availableCoins);
      // onSetReturnedMoney(valueToReturn);
    }
  };

  return (
    <div className='VendingMachine'>
      <section className='HowToUse'>
        <h2>How to use?</h2>
        <div className='HowToUse__Container'>
          <div className='HowToUse__Instruction'>
            <span>1.</span>
            <img src={InsertCoin} alt='insertCoin' />
            <span>Select the money by clicking on the equivalent button.</span>
          </div>
          <div className='HowToUse__Instruction'>
            <span>2.</span>
            <img src={Choice} alt='choice' />
            <span>Select your product or products (you can buy more than one at time).</span>
          </div>
          <div className='HowToUse__Instruction'>
            <span>3.</span>
            <img src={TakeItem} alt='pick' />
            <span>View your product and credit on the screen.</span>
          </div>
        </div>
        <div className='HowToUse__ExtraInfo'>
          <i className="fas fa-info-circle"></i>
          <span>
            Press <em>Return Money</em> if you want to get your credit back.
          </span>
        </div>
        <span className='HowToUse__BottomText'>- Enjoy your product -</span>
      </section>
      <div className='VendingMachine__Panel'>
        <section className='ProductsContainer'>
          {products.map((item, index) => (
            item.quantity > 0 && (
              <div
                key={`Item-${item.name}-${index}`}
                className='Products'
                onClick={() => onBuyProduct(item)}
              >
                <span className='ProductQuantity'>{item.quantity}</span>
                <img src={item.image} alt='item' />
                <span>{item.name} ${item.price}</span>
              </div>
            )))}
        </section>
        <section className='VendingMachine__Actions'>
          <ActionsPanel
            selectedProduct={selectedProduct}
            onSetSelectedProduct={onSetSelectedProduct}
            credit={credit}
            onSetCredits={onSetCredits}
            error={error}
            onSetError={onSetError}
            availableCoins={availableCoins}
            returnedMoney={returnedMoney}
            onSetReturnedMoney={onSetReturnedMoney}
            prevCredit={prevCredit}
            onSetPrevCredit={onSetPrevCredit}
            onCalculateCreditToReturn={onCalculateCreditToReturn}
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
    name: 'Water',
    price: 0.65,
    image: Water,
    quantity: 5,
  }, {
    name: 'Juice',
    price: 1.00,
    image: Juice,
    quantity: 5,
  }, {
    name: 'Soda',
    price: 1.50,
    image: Soda,
    quantity: 5,
  }, {
    name: 'Hot drink',
    price: 2.00,
    image: HotDrink,
    quantity: 5,
  }, {
    name: 'Cookies',
    price: 1.50,
    image: Cookies,
    quantity: 5,
  }, {
    name: 'Chips',
    price: 0.70,
    image: Chips,
    quantity: 5,
  }, {
    name: 'Candy',
    price: 0.1,
    image: Candy,
    quantity: 5,
  }, {
    name: 'Chocolate',
    price: 1.85,
    image: Chocolate,
    quantity: 5,
  },
  //  {
  //   name: 'Milk',
  //   price: 1.70,
  //   image: Milk,
  // },
];