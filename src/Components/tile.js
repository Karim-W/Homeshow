import React from 'react'
import '../Styles/Tile.css'
import  {useHistory} from 'react-router-dom'

function Tile(props) {
    const History = useHistory()
    return (
        <div className="tile"  >
            <img src={props.url} onClick={()=>showitem()}/>
            <div className="tileText">{props.title}</div>
        </div>
    )

    async function showitem(){
        var text = '?query='+props.title
        History.push({pathname: '/movie',
        search: text,
        state: { contentObject:props.obj }})
    }

}

export default Tile
