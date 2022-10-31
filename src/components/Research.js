import ResearchCSS from "./Research.module.css"
import ResultCard from "./ResultCard";

const Research = () => {

    return (
        <div className={ResearchCSS.research}>
            <h1>Our data science research in detail</h1>
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