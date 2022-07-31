import React from 'react'

export default function Track(props) {
    let obj = props.obj;
    let name = obj.name;
    let img = obj.album.images[0].url;
    let artists = obj.artists;
    let ms = obj.duration_ms;
    let time = convertToMins(ms)

    function convertToMins(ms) {
        let mins = Math.floor(ms / 60000);
        let secs = ((ms % 60000) / 1000).toFixed(0);
        return mins + ":" + (secs < 10 ? "0" : "") + secs;
    }

    return (
        <div className='track-container'>

            <div className="track-left">
                <img src={img} alt="" />
                <div className="track-info">
                    <p className="track-name">{name}</p>
                    <div className="track-artists-container">
                        {artists.map(object => {
                            return (
                                <p className="track-artist-name">{object.name}</p>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="track-right">
<p className="track-time">{time}</p>
            </div>


        </div>
    )
}

