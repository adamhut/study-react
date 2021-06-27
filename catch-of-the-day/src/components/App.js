import React from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import base from '../base'

import sampleFishes from '../sample-fishes'

class App extends React.Component{

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const {params} = this.props.match;
        console.log(`${params.storeid}/fishes`);
        
        // this sync the data from firebase
        this.ref = base.syncState(`${params.storeid}/fishes`,{
            context:this,
            state:'fishes'
        });

        //reinstate our localstorage
        let localStorageRef = localStorage.getItem(params.storeid);
        if(localStorageRef)
        {
            this.setState({order: JSON.parse(localStorageRef)})
        }
    };

    componentDidUpdate(){
        localStorage.setItem(
            `${this.props.match.params.storeid}`, 
            JSON.stringify(this.state.order)
        );
    };

    componentWillUnmount(){
        base.removeBinding(this.ref);
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
    updateFish = (key,updatedFish) =>{
        //1. Take a copy of existing state
        const fishes = { ...this.state.fishes };

        //2. update our edited fish to that fishes vars
        fishes[key] = updatedFish;

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
                <Order fishes={this.state.fishes} order={this.state.order}></Order>
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes }
                    updateFish={this.updateFish}
                ></Inventory>
            </div>
        );
    }

}

export default App;