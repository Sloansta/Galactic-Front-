import { useRef, useEffect } from 'react'

const Canvas = props => {
    const { 
        draw, ...rest
    } = props

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.style.width = '100%'
        canvas.style.height = '100%'
        canvas.width = canvas.offsetWidth 
        canvas.height = canvas.offsetHeight 
        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++
            draw(ctx, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }

    }, [draw])


    return <canvas ref={canvasRef} {...rest} />
}

export default Canvas