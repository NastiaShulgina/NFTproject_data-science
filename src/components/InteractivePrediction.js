import InteractivePredictionCSS from "./InteractivePrediction.module.css"
import NftCards from "./NftCards";
import nft1 from "../assets/nft1.png"
import nft2 from "../assets/nft2.png"
// import { useState } from "react";
// import { Link } from "react-router-dom";


const InteractivePrediction = () => {

    return (
        <div className={InteractivePredictionCSS.quiz}>
            <h2 className={InteractivePredictionCSS.heading}>NFT quiz:</h2>
            <p>
                The explosion of blockchain and NFT news has most likely left you with a slight FOMO feeling. I know, because who wouldn’t want to be creating or buying an NFT that will sell for up to 70 million USD in the future?! Yes, it’s possible.
                <br /><br /> The most famous and expensive NFT, Beeple, was sold for almost 70 million USD. But what makes exactly Beeple so interesting is that its price has skyrocketed. How about the “Human One” - NFT, which was auctioned for almost 30 million USD? Is the reason for the popularity of the type of NFT or perhaps the clothing or the background?
                <div className={InteractivePredictionCSS.nfts}>
                    <img src={nft1} className={InteractivePredictionCSS.nft}></img>
                    <img src={nft2} className={InteractivePredictionCSS.nft} />
                </div>
                <br /><br /> Now luckily, we’ve done all the work for you, so you just keep reading to find out how to make a fortune by creating or investing in specific types of NFTs!
                <br /><br />Look at the following NFT examples. At first glance, which would you guess could be the most valuable among this set in terms of price?
            </p>
            <div className={InteractivePredictionCSS.nft_cards}><NftCards /></div>
            <p>
                <br /><br /> Now before, checking the prices, make your guess and justify your answer: What traits could potentially be the reason for it being more expensive than the other?
                <br /><br /> Now hover each of them and reveal the prices. How different were your predictions from the real state?
                <br /><br /> We see that the most expensive is the first one, the human, with iridescent background color, 3D effect other special traits. Whereas the one with the lowest price is a penguin with glasses, big brown hair, and a sweater.
                <br /><br /> We did a small research on different trait types and price to see if there’s a correlation between them. We didn’t find any clear trend but we did find that the price of NFTs with some specific trait type values peaked at over 10 million USD! Here we have assembled the results in Table 1 shown below.
                <br /><br /> So basically, for our survey, we went the opposite direction: from collecting and analyzing the traits data to predicting the final possibility to boost the price for specific NFT samples.
                <br /><br /> Whether you’re a beginner starting to create NFTs or looking for promising NFTs to invest in, here is a guideline for you to start with. Here are the 5 most prevalent NFT trait types and their values that have shown to have the highest prices.
            </p>
            <table className={InteractivePredictionCSS.styled_table}>
                <thead>
                    <tr>
                        <th>Background</th>
                        <th>Mouth</th>
                        <th>Eyes</th>
                        <th>Type</th>
                        <th>Clothing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pink</td>
                        <td>Closed</td>
                        <td>Joyful</td>
                        <td>Human</td>
                        <td>Track Jacket</td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>Small grin</td>
                        <td>Sleepy</td>
                        <td>Divine</td>
                        <td>Turtleneck</td>
                    </tr>
                    <tr>
                        <td>Green</td>
                        <td>Bored</td>
                        <td>Bored</td>
                        <td>Ice</td>
                        <td>Hoodie</td>
                    </tr>
                    <tr>
                        <td>Fire</td>
                        <td>Bubblegum</td>
                        <td>Striking</td>
                        <td>MK1</td>
                        <td>Night Kimono</td>
                    </tr>
                    <tr>
                        <td>Grey</td>
                        <td>Party horn</td>
                        <td>Daydreaming</td>
                        <td>Akami Drip</td>
                        <td>Utility vest</td>
                    </tr>
                </tbody>
            </table>
            <p className={InteractivePredictionCSS.conclusion}>
                Table (1).
                <br /><br />So, before this blogpost has spread across and exploded all social media platforms, now is your chance to start sketching that human with joyful eyes and small grin on his face, wearing a night kimono while the background is on fire.
            </p>
        </div>
    );
}

export default InteractivePrediction;