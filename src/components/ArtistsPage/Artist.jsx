import "./ArtistsPage.css"

import React from 'react'

export default function Artist(props) {
    let obj = props.obj;
    let img = obj.images[1].url;
    let name = obj.name;
   
    return (
        <div className="artist">
            <img src={img} alt="" />
            <div className="name">{name}</div>
        </div>
    )
}
