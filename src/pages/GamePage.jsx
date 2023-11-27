import Canvas from '../components/Canvas';
import Tetris from '../game/Tetris';
import { useEffect } from 'react'

import '../styles/gamepage.css'

const GamePage = ({ onExit }) => {
    const handleExitClick = () => {
        const confirmExit = window.confirm("Are you sure you want to leave the game?")
        if (confirmExit) 
            onExit()
    } 

    const canvasWidth = window.innerWidth
    const canvasHeight = window.innerHeight
    let tetris = null
    const draw = (ctx, frameCount) => {
        if(tetris == null) {
            tetris = new Tetris(ctx, 750, 100, 290, 600, 30, 0)
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
        if(tetris != null)
            tetris.draw()
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(tetris != null) {
                switch(event.key) {
                    case 'a':
                    case 'A': 
                        tetris.moveTetromino(-1, 0)
                        break
                    case 'd':
                    case 'D':
                        tetris.moveTetromino(1, 0)
                        break
                    case 's':
                    case 'S':
                        tetris.moveTetromino(0, 1)
                        break
                    case 'w':
                    case 'W': 
                        tetris.rotateTetromino()
                        break
                    default: 
                        break
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    return (
        <div className="game-container">
            <button className="exit-button" onClick={() => handleExitClick()}>X</button>
            <Canvas draw={draw}/>
        </div>    
    )
};

export default GamePage