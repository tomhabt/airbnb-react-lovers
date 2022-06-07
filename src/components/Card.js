import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src={require('../images/katie-zaferes.png')} className="card--image"></img>
            <div className="card--stats">
                <img src={require('../images/star.png')} className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zateres</p>
            <p><span className="bold">From $136</span>/person</p>
        </div>
        

    )
}