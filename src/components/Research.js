import ResearchCSS from "./Research.module.css"
import ResultCard from "./ResultCard";

const Research = () => {

    return (
        <div className={ResearchCSS.research}>
            <h1>Our data science research</h1>
            <p className={ResearchCSS.intro}>
                Finally, you can see that the most expensive is the first one, having iridescent background color, 3D effect, human image and other special traits.
                <br />
                <br />
                So basically, for our survey we went in the opposite direction: from collecting and analyzing the traits data to predicting the final possibility to boost with the price for a specific NFT sample.
            </p>
            <div className={ResearchCSS.results}>
                <h2 className={ResearchCSS.resultsHeading}>
                    Results and histograms:
                </h2>
                <ResultCard />
            </div>
        </div>
    );
}

export default Research;