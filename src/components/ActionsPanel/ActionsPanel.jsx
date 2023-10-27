import { useEffect } from 'react';

import five from '../../assets/products/five_cents.png';
import ten from '../../assets/products/ten.png';
import quarter from '../../assets/products/quarter.png';
import dollar from '../../assets/products/dollar.png';

import './ActionsPanel.scss';


/**
 * @param {Object} selectedProduct
 * @param {Func} onSetSelectedProduct
 * @param {number} credit
 * @param {Func} onSetCredits
 * @param {boolean} error
 * @param {Func} onSetError
 * @param {Array} availableCoins
 * @param {Func} onCalculateCreditToReturn
 * @param {Array} returnedMoney
 * @param {Func} onSetReturnedMoney
 * @param {number} prevCredit
 * @param {Func} onSetPrevCredit
 **/

const ActionsPanel = ({
  selectedProduct,
  onSetSelectedProduct,
  credit,
  onSetCredits,
  error,
  onSetError,
  availableCoins,
  onCalculateCreditToReturn,
  returnedMoney,
  onSetReturnedMoney,
  prevCredit,
  onSetPrevCredit,
}) => {

  useEffect(() => {
    if (credit !== 0) onSetError(false);
  }, [credit]);

  const onReturnMoney = () => {
    if (credit === 0) {
      onSetError(true);
      onSetPrevCredit(0);
      onSetReturnedMoney([]);
      onSetSelectedProduct({
        name: '',
        image: '',
      });
      return;
    }
    const valueToReturn = onCalculateCreditToReturn(credit, availableCoins);
    onSetError(false);
    onSetPrevCredit(credit);
    onSetReturnedMoney(valueToReturn);
    onSetCredits(0);
    onSetSelectedProduct({
      name: '',
      image: '',
    });
  };

  const onSelectCoin = (value) => {
    onSetReturnedMoney([]);
    onSetPrevCredit(0);
    if (typeof value === 'number') {
      onSetCredits(prevState => (
        prevState + value
      ));
    }
  };

  return (
    <>
      <div className='Screen'>
        <div>
          <span data-error={error}>
            <strong>Credit: </strong>
          </span>
          <span data-error={error}>
            ${credit.toFixed(2)}
          </span>
        </div>
        {selectedProduct.name && (
          <div>
            <span>
              <strong>Product:</strong>
            </span>
            <span>
              {selectedProduct.name}
            </span>
          </div>
        )}
        {prevCredit !== 0 && (
          <div>
            <span>
              <strong>You had: </strong>
            </span>
            <span>
              ${prevCredit.toFixed(2)}
            </span>
          </div>
        )}
        {Object.values(returnedMoney).length > 0 && (
          <div>
            <span>
              <strong>You get: </strong>
            </span>
            <span>
              {returnedMoney}
            </span>
          </div>
        )}
        {error && <p>Not Enough Credits!</p>}
      </div>
      <div className='Input'>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="$0.05"
          data-tooltip-place="top"
          onClick={() => onSelectCoin(0.05)}
        >
          <img src={five} alt='five' />
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="$0.10"
          data-tooltip-place="top"
          onClick={() => onSelectCoin(0.10)}
        >
          <img src={ten} alt='ten' />
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="$0.25"
          data-tooltip-place="top"
          onClick={() => onSelectCoin(0.25)}
        >
          <img src={quarter} alt='quarter' />
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="$1.00"
          data-tooltip-place="top"
          onClick={() => onSelectCoin(1.00)}
        >
          <img src={dollar} alt='dollar' />
        </div>
        <div className='ReturnCoin__Button' onClick={onReturnMoney} >Return Money</div>
      </div>
      <div className='Output'>
        {selectedProduct.image !== '' && <img src={selectedProduct.image} alt='output' />}
      </div>
    </>
  );
};

export default ActionsPanel;
