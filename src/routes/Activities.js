import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/night.jpg"

function Activities (){
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="Activities"

            
            btnClass="hide" 
        />
        </>
    );
}

export default Activities;