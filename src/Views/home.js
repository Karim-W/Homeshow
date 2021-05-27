import React,{useEffect,useState,useRef} from 'react'
import '../Styles/home.css'
import Slide from '../Components/Slide'
import Tile from '../Components/tile'
import Dropdown from 'react-bootstrap/Dropdown'
import {DropdownButton} from 'react-bootstrap'
import firebase from '../firebase'
import History, { useHistory } from 'react-router-dom'
import TopBar from '../Components/TopBar'

// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a37390599amsh4667ec06cd4895dp1d314djsna580a56c28e6",
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })

function Home() {
    const History = useHistory()
    var myTitles = [
    {title:"the incredibles",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    },
    {title:"the incrediblee",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    },
    {title:"the incredibles",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    },
    {title:"the incredibles",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    },
    {title:"the incredibles",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    },{title:"the incredibles",
    url:"https://www.sonoma.edu/sites/www/files/field/image/incredibles.jpg"
    }]
    const [Catalog,setItems] = useState([])
    const isInitialMount = useRef(true);
    useEffect(()=>{
        if (isInitialMount.current) {
        var allofthem = []
        var dbref = firebase.firestore().collection('/Library/Content/Movies')
        dbref.get().then(function (snapshot){
            snapshot.forEach((v)=>{
                console.log(v.data().img)
                allofthem.push({title:v.id,url:v.data().img,type:'M'})
            })
            setItems(allofthem)
            if (allofthem.length !== 0) {
                isInitialMount.current = false;
              }
        })
    }
    },[Catalog])

    return (
        <div>
            <TopBar/>
            <Slide className="slide" items={myTitles}/>
            <h2>Favorites</h2>
            <div className="Favs" >
            {Catalog.map(x => <Tile onClick={()=>showmovie(x)} title={x.title} url={x.url} obj={x}></Tile>)}
            
            </div>
        </div>
    )
    async function showmovie(x){
        History.push({pathname: '/movie',
        search: '?query='+x.title,
        state: { detail: x }})
    }
}

export default Home
