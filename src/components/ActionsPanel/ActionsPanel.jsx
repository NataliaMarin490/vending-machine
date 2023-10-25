import five from '../../assets/products/five_cents.png'
import ten from '../../assets/products/ten.png'
import quarter from '../../assets/products/quarter.png'
import dollar from '../../assets/products/dollar.png'

import './ActionsPanel.scss';


const ActionsPanel = ({
  screen,
  onSetScreen,
  selectedProduct,
  img,
  cosa,
}) => {

  return (
    <>
      <div className='Screen'>
        <span>Credit: $20 </span>
        <span>Product: Soda </span>
      </div>
      <div className='Input'>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="0.05"
          data-tooltip-place="top"
        >
          <img src={five} alt='five'/>
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="0.10"
          data-tooltip-place="top"
        >
          <img src={ten} alt='ten'/>
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="0.25"
          data-tooltip-place="top"
        >
          <img src={quarter} alt='quarter'/>
        </div>
        <div
          className="Button"
          data-tooltip-id="coin"
          data-tooltip-content="1.00"
          data-tooltip-place="top"
        >
          <img src={dollar} alt='dollar'/>
        </div>
        <div className='ReturnCoin__Button'>Return Coin</div>
      </div>
      <div className='Output'>
        <img src={img} alt='output' width='100px' />
      </div>
    </>
  );
};

export default ActionsPanel;
