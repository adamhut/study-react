import React from 'react'

class EditFishForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    handleChange = (event)=>{
        
        console.log(event.currentTarget.name);
        //udpate that fish
        //1. get the copy of current fish
        const updatedFish = {...this.props.fish} 
        updatedFish[event.currentTarget.name] = event.currentTarget.value;
        //or equal to 
        //const updatedFish = {
        //  ...this.props.fish,
        //  [[event.currentTarget.name]:event.currentTarget.value
        //  } 
        
        this.props.updateFish(this.props.index, updatedFish);
    };

    handleRemove = ()=>{
        this.props.deleteFish(this.props.index);
    }
    render(){
        // this.nameRef = this.props.fish.name;
        // this.priceRef = this.props.fish.price;
        // this.statusRef = this.props.fish.status;
        // this.descRef = this.props.fish.desc;
        // this.imageRef = this.props.fish.image;
        return (
            <div className="fish-edit">
                <input 
                    type="text" 
                    ref={this.nameRef} 
                    onChange={this.handleChange} 
                    value={this.props.fish.name} 
                    name="name" 
                    placeholder="Name"  
                />
                <input 
                    type="text" 
                    ref={this.priceRef}  
                    onChange={this.handleChange} 
                    value={this.props.fish.price} 
                    name="price" 
                    placeholder="Price" 
                />
                <select name="status" ref={this.statusRef} onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available" >Fresh!</option>
                    <option value="unavailable" >Sold Out!</option>
                </select>
                <textarea 
                    ref={this.descRef}  
                    name="desc" 
                    placeholder="Desc" 
                    onChange={this.handleChange} 
                    value={this.props.fish.desc}
                ></textarea>
                <input 
                    ref={this.imageRef} 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.props.fish.image} 
                    name="image" 
                    placeholder="Image" 
                />
                <button 
                    type="button" onClick={this.handleRemove}> Remove Fish
                </button>
            </div>
        );

    }

}


export default  EditFishForm;