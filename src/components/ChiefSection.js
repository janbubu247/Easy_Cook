import ChiefCard from "./ChiefCard"

export default function ChiefSection(){
    const chiefs=[
        {
            name: "Gordon Ramsay",
            img: "/img/top-chiefs/gordon-ramsay.jpg",
            quote: "Put your head down and work hard. Never wait for things to happen, make them happen for yourself through hard graft and not giving up."
        },
        {
            name: "Marcus Samuelsson",
            img: "/img/top-chiefs/marucs-samuelsson.jpg",
            quote: "Hard work IS its own reward. Integrity IS priceless. Art DOES feed the soul."
     
        },
        {
            name: "Maneet Chauhan",
            img: "/img/top-chiefs/maneet-chauhan.jpg",
            quote: "Indian spices can find a place in any cuisine. It's just a matter of opening your mind and palate to new flavors."
       },
        {
            name: "Matt Basile",
            img: "/img/top-chiefs/matt-basile.png",
            quote: "Breakfast is a meal but brunch is a culture."
         },
        {
            name: "Guy Fieri",
            img: "/img/top-chiefs/guy-fieri.jpg",
            quote: "Peace, love and taco grease!"
        },
        {
            name: "Sunny Anderson",
            img: "/img/top-chiefs/sunny-anderson.jpg",
            quote: "Cumin baked chicken WITH SWEET HONEY-LIME SAUCE"
        },
    ]
    return(
        <div className="section chiefs">
            <h1 className="title">Chef Quotes</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief=><ChiefCard key={chief.name} chief={chief}/>) }
            </div>
        </div>
    )
}