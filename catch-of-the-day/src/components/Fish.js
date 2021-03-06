import React from 'react'
// import fishes from '../sample-fishes';
import {formatPrice} from '../helpers'
import PropTypes from 'prop-types'


class Fish extends React.Component{


    handleClick = ()=>{

        this.props.addToOrder(this.props.index)

    }

    render (){
        const {image,name,price,desc,status} = this.props.details;

        const isAvailable = status === 'available' ? true:false;

        return (
            <li className="menu-fish">
                {/* <img src={this.props.details.image} alt={this.props.details.image} /> */}
                <img src={image} alt={name} /> 
                <h3 className="fish-name">
                    {name}
                    <span className="price">{ formatPrice(price) }</span>
                </h3>
                <p>{desc}</p>
                <button type="button" disabled={!isAvailable} onClick={this.handleClick}>{ isAvailable ? 'Add To Cart':'Sold Out!!'}</button>
            </li>
        );
    }
}

Fish.propTypes = {
    details: PropTypes.shape({
        image :PropTypes.string,
        name :PropTypes.string,
        price:PropTypes.number,
        desc:PropTypes.string,
        status:PropTypes.string,
    }),
    addToOrder: PropTypes.func,
}


export default Fish;