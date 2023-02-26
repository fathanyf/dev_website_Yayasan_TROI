import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1591151426367-c9975163cc51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey"
        text="Lorem Ipsum Dolor si Amet"
        buttonText="Travel Plan"
        url="/"
        btnClass="show" 
        />
        <Destination />
        </>
    ); 
}

export default Home;