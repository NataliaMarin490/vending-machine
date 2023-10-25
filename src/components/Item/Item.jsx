import './Item.scss';

/**
 * @param {String} name
 * @param {number} price
 * @param {String} image
 * @param {Func} handleCheckboxOption
 * @param {Object} dateConf in case the fieldType is input(date)
 * If fieldType is Select o radio o checkbox the option need be put manually
 **/

const Item = ({
  name,
  price,
  image
}) => {

  return (
    <div className='Products'>
      <img src={image} alt='item'/>
      <span>{name} ${price}</span>
    </div>
  );
};

export default Item;
