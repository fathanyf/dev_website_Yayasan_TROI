import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/8.jpg"
import Trip2 from "../assets/9.jpg"
import Trip3 from "../assets/10.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Galeri</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat ullam accusantium 
                incidunt eos repellendus cum animi quasi 
                distinctio eum consectetur?"
                />

                <TripData
                image={Trip2}
                heading="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat ullam accusantium 
                incidunt eos repellendus cum animi quasi 
                distinctio eum consectetur?"
                />

                <TripData
                image={Trip3}
                heading="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat ullam accusantium 
                incidunt eos repellendus cum animi quasi 
                distinctio eum consectetur?"
                /> 
            </div>
        </div>
    )
}

export default Trip; 