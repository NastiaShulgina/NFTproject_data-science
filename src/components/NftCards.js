import NftCardsCSS from "./NftCards.module.css"

const NftCards = () => {

    const cheapest = {
        url: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/1210.png",
        altTxt: "The cheapest asset",
        price: "$11.398"
    }

    const middle = {
        url: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/200.png",
        altTxt: "The middle price asset",
        price: "$3384.138"
    }

    const expensive = {
        url: "https://clonex-assets.rtfkt.com/images/13824.png",
        altTxt: "The most expensive asset",
        price: "$50 453 160"
    }

    const nftsTraits = [cheapest, middle, expensive]

    return (
        <div className={NftCardsCSS.nft_cards}>
            {
                nftsTraits.map((nft) => {
                    return (
                        <div className={NftCardsCSS.nft_card}>
                            <div className={NftCardsCSS.nft_cards_inner}>
                                <img className={NftCardsCSS.nft_assets} src={nft.url} alt={nft.altTxt} />
                                <div className={NftCardsCSS.nft_prices}>price: <div>{nft.price}</div></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NftCards;