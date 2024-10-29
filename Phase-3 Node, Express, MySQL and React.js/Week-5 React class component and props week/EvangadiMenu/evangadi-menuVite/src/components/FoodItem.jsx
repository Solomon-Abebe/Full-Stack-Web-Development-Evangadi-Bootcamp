import  {Component} from "react";

import PropTypes from "prop-types";

class FoodItem extends Component {
  render() {
    const { title, price, img, category, desc } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <h3>{category}</h3>
          <p>${price}</p>
        </div>
        <div className="food-desc">{desc}</div>
      </div>
    );
    
  }
}

FoodItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FoodItem;
