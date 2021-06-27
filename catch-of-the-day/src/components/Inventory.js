import React from 'react'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import firebase from 'firebase';
import PropTypes from 'prop-types'
import Login from './Login'
import base, { fireabseApp } from '../base';

class Inventory extends React.Component{

    static propTypes= {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
    }

    state = {
        uid : null,
        owner :null,
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.authHandler({ user });
            }
        })
    };

    logout = async ()=> {
        await firebase.auth().signOut();

        this.setState({
            uid :null,
        })
    };

    authHandler = async(authData)=>{
        
        //1. look up the current store in the firebas database
        const store  = await base.fetch(this.props.storeId,{ context:this })
        console.log(store);
        //2. claim it if there is no owner
        if(!store.owner){
            // save it as our own
            await base.post(`${this.props.storeId}/owner`,{
                data: authData.user.uid
            })
        }
        //3. set the state of the inventory component to refect the current user
        this.setState({
            uid : authData.user.uid,
            owner : store.owner || authData.user.uid,
        })

        console.log(authData);    
    };

    authenticate = (provider) => {
        
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        fireabseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);

    };
    

    render(){

        const logout = <button onClick={this.logout}>Log Out</button>
        
        //1. Check if they are logged in

        if(!this.state.uid )
        {
            return <Login authenticate={this.authenticate}></Login>
        }

        //2. check if they are not the owner of the store
        if(this.state.uid !== this.state.owner)
        {
            return (
                <div> 
                    <p>Sorry!! You are not the owner!</p>
                    { logout }
                </div>
            )
        }


        // 3. they must be the owner , just render the inventory.
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                 { logout }
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