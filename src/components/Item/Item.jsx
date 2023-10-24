import './Item.scss';

const Item = ({
  name,
  price
}) => {

  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

export default Item;
