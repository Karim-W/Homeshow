import React from 'react'
import firebase from '../firebase'

function TopBar() {
    return (
        <div>
            <div className="TopBar">
            <div>burger</div>
            <h1 >Shome</h1>
            <h3>{firebase.auth().currentUser.displayName}</h3>
            </div>
        </div>
    )
}

export default TopBar
