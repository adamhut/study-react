import React from 'react'
import {formatPrice} from '../helpers';
import { TransitionGroup,CSSTransition  } from 'react-transition-group'
import PropTypes from 'prop-types'

class Order extends React.Component{
    static propTypes = {
        fishes : PropTypes.object,
        order : PropTypes.object,
        removeFromOrder: PropTypes.func,
    };
    
    renderOrder = (key) =>{
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        const transitionOptions = {
            classNames:"order" ,
            key:{key} ,
            timeout:{enter:500 ,exit:500 }
        }


        //make sure the fish is loaded before we continue
        if(!fish) return null;
        
        if(!isAvailable)
        {
            return (
                <CSSTransition 
                   {...transitionOptions}
                >
                    <li key={key}>
                        Sorry! {fish ? fish.name:'fish'} is no longer available 
                    </li>
                </CSSTransition>
            )
        }
        return (
            <CSSTransition 
                classNames="order" 
                key={key} 
                timeout={{enter:500 ,exit:500 }}
            >
                <li key={key} className="">
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition 
                                classNames="count" 
                                key={count} 
                                timeout={{enter:500 ,exit:500 }}
                            >
                                <span> {count} </span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name }
                        { formatPrice(count * fish.price) }
                        <button 
                            type="button" onClick={()=>{this.props.removeFromOrder(key)}}> &times;
                        </button>
                    </span>
                </li>
            </CSSTransition>
        )
       
    };

    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal ,key)=>{ 
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';

            if(!isAvailable){
                return prevTotal;
            }
            return prevTotal + ( fish.price * count);
           
        },0)

        return (
            
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup className="order" component="ul">
                    {
                        orderIds.map(this.renderOrder)
                    }         
                </TransitionGroup>
                <div className="total">
                    Total 
                    <strong>{ formatPrice(total) }</strong>
                </div>
            </div>

        );
    }
}

// Order.propType = {
//     fishes : PropTypes.Object,
//     order : PropTypes.Object,
// }

export default Order;