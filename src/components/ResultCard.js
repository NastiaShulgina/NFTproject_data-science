import ResultCardCSS from "./ResultCard.module.css"
import histogram1 from "../assets/histogram1.jpg"
import histogram2 from "../assets/histogram2.jpg"
import histogram3 from "../assets/histogram3.jpg"
import histogram4 from "../assets/histogram4.jpg"
import histogram5 from "../assets/histogram5.jpg"

const ResultCard = () => {

    const results = [
        {
            number: 1,
            text: "We have subsetted to values above 1 USD because there is negligible amount of data with values less than 1USD.",
            imagePathOne: histogram1,
            imagePathTwo: histogram2
        },
        {
            number: 2,
            text: "The histogram below has let us know which NFT traits are the most common and therefore which of them should be taken into consideration. Starting with 'ground' and ending with 'clothes' there are the most popular traits and the rest was cut off during the research.",
            imagePathOne: histogram3
        },
        {
            number: 3,
            text: "The following histogram is showing the price depending on different clothing values. As you can see, some of the values have sparks at the high points of price (y-axis).",
            imagePathOne: histogram4
        },
        {
            number: 4,
            text: "Moving on to the next histogram, which represents type values, you should notice that the sparks of hight price are present at y-axis of, for instance, human or ice types. Consequently, as an NFT artist you could consider combining the sparking traits from different histograms to achieve the highest probability of your NFT asset becoming popular and expensive. ",
            imagePathOne: histogram5
        }
    ]


    return (
        <div className={ResultCardCSS.card}>
            {
                results.map((res) => {
                    return (
                        <div>
                            <p className={ResultCardCSS.text}>{res.number + "). " + res.text}</p>
                            <div className={ResultCardCSS.histograms}>
                                <img src={res.imagePathOne} className={ResultCardCSS.histogramImage}></img>
                                {res.imagePathTwo ? <img src={res.imagePathTwo} className={ResultCardCSS.histogramImage} /> : null}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ResultCard;