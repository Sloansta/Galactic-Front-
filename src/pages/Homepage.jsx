import { useState, useEffect } from 'react'
import '../styles/homepage.css'


const Homepage = ({ handleGameToggle }) => {
    const [showAbout, setShowAbout] = useState(false)
    const handleShowAbout = () => {
        setShowAbout(!showAbout)
    }

    useEffect(() => {
        console.log(showAbout)
    }, [showAbout])
    return (
        <div className="container">
            {showAbout ? (
                <h4 style={{ color: 'white', fontFamily: 'Orbitron'}}>
                    Galactic Front is a web experiment made by <a style={{color: "orange"}} href="https://sloansta.github.io/sloanb.dev/">Sloan Boyce</a>
                    </h4>
            ) : null}
            <h1 className="page-title">Galactic Front</h1>
            <div className="button-options">
                <button className="game-button" onClick={() => handleGameToggle()}>New Game</button>
                <button className="game-button" onClick={() => handleShowAbout()}>About</button>
            </div>
        </div>
    )
};

export default Homepage