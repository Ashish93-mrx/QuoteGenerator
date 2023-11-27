import React, { useState, useEffect } from "react";
import './Randomquotes.css'
import twitter_icon from '../Assest/twitter.png';
import loading from '../Assest/load.png';

const Randomquotes= ()=>{
    const [quotes,setQuotes] = useState([]);
    const [quote,setQuote] = useState({
        text:"Never Give Up!",
        author:"No one"
    });

    useEffect(() => {
        loadQuotes();
    }, []);

    //let quotes=[];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json(); 
        setQuotes(data);
        //console.log("fetch",quotes)
    }
    
    const random=()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
        console.log("single",select);
    }

    const tweet = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }
    
    
    return (
      
        <div className="container">
        <div className="quote">
            {quote.text}
        </div>
        <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="auth">
            - {quote.author.split(',')[0]}
            </div>
            <div className="icons">
                <img src={loading} alt="" onClick={()=>random()}></img>
                <img src={twitter_icon} alt="" onClick={()=>tweet()}></img>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Randomquotes;