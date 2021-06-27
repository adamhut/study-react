import React from 'react'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import PropTypes from 'prop-types'


class Inventory extends React.Component{

    static propTypes= {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
    }

    render(){
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                {
                    Object.keys(this.props.fishes).map((key)=>{

                        return <EditFishForm 
                            fish={this.props.fishes[key]} 
                            key={key}
                            index={key}
                            updateFish={this.props.updateFish}
                            deleteFish={this.props.deleteFish}
                        >                              
                        </EditFishForm>
                    })
                }
                <AddFishForm addFish={this.props.addFish}></AddFishForm>
                <button type="button" onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}

// Inventory.propTypes = {
//     updateFish: PropTypes.func,
//     deleteFish: PropTypes.func,
// }


export default Inventory;