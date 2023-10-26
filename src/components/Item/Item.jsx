import { useEffect, useState } from 'react';

import './Item.scss';

/**
 * @param {String} name
 * @param {number} price
 * @param {String} image
 * @param {number} credit
 * @param {Func} onSetError
 * @param {Object} dateConf
 * @param {Func} onSetReturnedMoney
 * @param {Func} onSetPrevCredit
 **/

const Item = ({
  name,
  price,
  image,
  credit,
  onSetError,
  onSetReturnedMoney,
  onSetPrevCredit,
  onCalculateCreditToReturn,
}) => {

  useEffect(() => {
    if (credit !== 0) onSetError(false);
  }, [credit]);

  const onClickProduct = () => {
    if (credit === 0) onSetError(true);
    onSetPrevCredit(0);
    onSetReturnedMoney([]);
  };

  return (
    <></>
  );
};

export default Item;
