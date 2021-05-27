import React, { useEffect, useState, useRef } from "react";
import TopBar from "../Components/TopBar";
import '../Styles/movies.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function MoviePage(props) {
  const [details, setDetails] = useState([]);
  const isInitialMount = useRef(true);
  const [Plot, setPlot] = useState();
  const [Genres,setGenres] = useState([])
  var myobj = props.location.state.contentObject
  useEffect(() => {
    var q = String(props.location.state.detail);
    console.log(props.location.state);
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${q}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a37390599amsh4667ec06cd4895dp1d314djsna580a56c28e6",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => console.log(data));
  }, [details]);

  return (
    <div>
      <TopBar />
      <div className="overview">
        <img className="fuckraafat" src={myobj.url}/>
        <button className="overButt">
            <PlayArrowIcon style={{width:"70px",height:"70px"}} />
        </button>
      </div>
      <div className="innerDesc">
        <p>{Plot}</p>
        <div className="genre-list">
            Genre(s)
            <div className="genre-tiles">
                {Genres.map((gen)=><h1>gen</h1>)}
            </div>

        </div>
        <center>
          <div className="deets=container">
            <div className="col-1">
                <p>name:</p>
            </div>
            <div className="col-2"></div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default MoviePage;
