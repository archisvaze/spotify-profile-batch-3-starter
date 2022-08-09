import React from 'react'
import "./RecentPage.css"
export default function RecentTrack(props) {
    //get date
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let obj = props.obj;
    let arr = obj.played_at.split("T");
    let date = arr[0];
    let time = arr[1].split(".")[0];
    let ms = obj.track.duration_ms
    let duration = convertToMins(ms);
    let name = obj.track.name;
    let artists = obj.track.artists;
    let img = obj.track.album.images[2].url

    function convertToMins(ms) {
        let mins = Math.floor(ms / 60000);
        let secs = ((ms % 60000) / 1000).toFixed(0);
        return mins + ":" + (secs < 10 ? "0" : "") + secs;
    }


    console.log(obj)
  return (
    <a
     href={props.obj.track.external_urls.spotify}
     className='recent-container'>
        <div className="recent-img-container">
            <img src={img} alt="" />
            <div className="recent-name-container">
                <div className="recent-name">{name}</div>
                <div className="recent-artists-container">
                    {artists.map(object => {
                        return (
                            <div className="recent-artist-name">{object.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="recent-time-container">
            <div className="recent-duration">{duration}</div>
            <div className="recent-time">
                Played on {date} at {time}
            </div>
        </div>
    </a>
  )
}
