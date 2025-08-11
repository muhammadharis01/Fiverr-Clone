import React from "react"
import { useState } from "react"
import "./gigs.scss"
import { gigs } from "../../data"
import GigCard from "../../components/gigCard/GigCard"

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState(false);

    const resort = (type) => {
        setSort(type);
        setOpen(false);
    }

    
    return (
        <div className="gigs">
            <div className="container">
                <div className="breadcrumps">
                    FIVERR {'>'} GRAPHICS & DESIGN {'>'} LOGO DESIGN
                </div>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder="min"/>
                        <input type="text" placeholder="max"/>
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortby">SortBy</span>
                        <span className="sortby">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./img/down.png" alt="" onClick={()=> setOpen(!open)}/>
                        {open && <div className="rightMenu">
                            {sort === "sales" ?<span onClick={() => resort("createdAt")}>Newest</span>
                            : <span onClick={() => resort("sales")}>Best Selling</span>}
                        </div>}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map(gig => (
                        <GigCard key={gig.id} item={gig}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gigs