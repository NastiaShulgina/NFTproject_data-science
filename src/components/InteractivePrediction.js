import InteractivePredictionCSS from "./InteractivePrediction.module.css"
import NftCards from "./NftCards";
// import { useState } from "react";
// import { Link } from "react-router-dom";


const InteractivePrediction = () => {

    return (
        <div className={InteractivePredictionCSS.quiz}>
            <h2 className={InteractivePredictionCSS.heading}>NFT quiz:</h2>
            <p>
                Look at the following NFT examples. At the first glance, which would probably be the most valuable one among this set in terms of price?
            </p>
            <p>
                Let’s now take this one to pieces: what traits could potentially be the reason of it being that expensive in your opinion?
            </p>
            <div className={InteractivePredictionCSS.nft_cards}><NftCards /></div>
            <p>
                Now hover each of them and reveal the prices. How different were your predictions from the real state?
            </p>
        </div>
    );
}

export default InteractivePrediction;