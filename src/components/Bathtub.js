import React from 'react'; 
import './Bathtub.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet } from '@fortawesome/free-solid-svg-icons';

class Bathtub extends React.Component {
    constructor() {
        super(); 
        this.state = {
            height: 0, 
            level: 0
        }; 
    }; 

    handleIncrease = (event) => {
        event.preventDefault(); 

        if (this.state.height < 100) {
            this.setState({
                height: this.state.height + 20, 
                level: this.state.level + 1
            });
        }; 
    }; 

    handleDecrease = (event) => {
        event.preventDefault(); 

        if (this.state.height === 0) {
            return null
        } else {
            this.setState({
                height: this.state.height - 20, 
                level: this.state.level - 1 
            });
        }; 

    }; 

    render() {
        const currentHeight = this.state.height.toString(); 
        const waterStyle = {
            height: `${currentHeight}px`
        }; 

        return <>
            <h1>React Bathtub</h1>
            <h3>Water Level: {this.state.level}</h3>
            <div className="bathtub-container">
                <div className="button-l">
                    <FontAwesomeIcon icon={faFaucet} />  
                    <button onClick={e => this.handleDecrease(e)}>Decrease</button>
                </div>
                <div className="bathtub">
                    <div className="bathtub-water" style={waterStyle}></div>
                </div>
                <div className="button-r">
                    <FontAwesomeIcon icon={faFaucet} />  
                    <button  onClick={e => this.handleIncrease(e)}>Increase</button>
                </div>
            </div>
        </>
    }
}; 

export default Bathtub; 