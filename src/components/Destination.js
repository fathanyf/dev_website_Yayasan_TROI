import Mountain1 from "../assets/4.jpg"
import Mountain2 from "../assets/5.jpg"
import Mountain3 from "../assets/6.jpg"
import Mountain4 from "../assets/7.jpg"
import DestinationData from "./DestinationData"
// import "./DestinationStyle.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Backgorund</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

        <DestinationData
        heading="judul"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil laborum deleniti iusto ea magni ut deserunt at architecto dicta 
        eaque laudantium ipsum dignissimos, earum officia maiores dolores veritatis! Recusandae omnis mollitia provident. 
        Officia corrupti quasi ea iure fugiat, veniam libero atque, totam error doloremque adipisci unde asperiores magni porro."
        />

        </div>
    )
}

export default Destination