import React from 'react'
import PropTypes from 'prop-types'

class AddFishForm extends React.Component{
        
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish :PropTypes.func
    }   

    createFish = (event) => {
        // 1. prvent the form form submitting
        event.preventDefault();
    
        // console.log(this.nameRef.current.value)
        const fish = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value),
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value,
        }
        this.props.addFish(fish);
        // console.log(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form action="" className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
                <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unava ilable">Sold Out!</option>
                </select>
                <textarea ref={this.descRef}  name="desc" placeholder="Desc" ></textarea>
                <input ref={this.imageRef} type="text" name="image" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    };
}

// AddFishForm.propTypes={
//     addFish:PropTypes.func,   
// }

export default AddFishForm