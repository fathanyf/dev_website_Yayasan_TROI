import { Component } from "react";
import "./DestinationStyle.css"
import Mountain1 from "../assets/4.jpg"
import Mountain2 from "../assets/5.jpg"
import Mountain3 from "../assets/6.jpg"
import Mountain4 from "../assets/7.jpg"

class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData