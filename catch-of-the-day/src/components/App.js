import React from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';

import sampleFishes from '../sample-fishes'

class App extends React.Component{

    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) =>{
        //1. Take a copy of existing state
        const fishes = { ...this.state.fishes };

        //2. add our new fish to that fishes vars
        fishes[`fish${Date.now()}`] = fish;

        //3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });      
    };

    loadSampleFishes = ()=>{
        this.setState({ fishes : sampleFishes});
    };

    addToOrder = key => {
        //1. take a copy of the states
        const order = { ...this.state.order };
        //2. Either add to the order , or update the number in our order
        order[key]  = order[key] + 1 || 1;
        //3. Call setState to update our state object
        this.setState({ order:order });

    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={300} cool={true}></Header>

                    <ul className="fishes">
                        { 
                            Object.keys(this.state.fishes).map(key =>{
                                return  <Fish 
                                    details={this.state.fishes[key]} 
                                    key={key} 
                                    index={key}
                                    addToOrder={this.addToOrder}
                                ></Fish>
                            }) 
                        }                        
                    </ul>
                </div>
                <Order></Order>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} ></Inventory>
            </div>
        );
    }

}

export default App;