class Tetris {
    constructor(ctx, x, y, boardWidth, boardHeight, cellSize, score) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.boardWidth = boardWidth
        this.boardHeight = boardHeight
        this.cellSize = cellSize
        this.score = score

        this.exampleTetromino = {
            shape: [[1, 1, 1], [1, 0, 0]], // Represents a 'T' shape
            x: 29, // Starting X position
            y: 4.3, // Starting Y position
        }
    }

    moveTetromino(dx, dy) {
        let newX = this.exampleTetromino.x + dx;
        let newY = this.exampleTetromino.y + dy;
    
        let tetrominoWidth = this.exampleTetromino.shape[0].length;
        let tetrominoHeight = this.exampleTetromino.shape.length;
    
        if (newX < 25 || (newX + tetrominoWidth) > 35) {
            dx = 0;
        }
    
        if ((newY + tetrominoHeight) > 24.3) {
            dy = 0;
        }
    
        this.exampleTetromino.x += dx;
        this.exampleTetromino.y += dy;
    }
    

    drawTetromino() {
        this.ctx.fillStyle = 'red'; // Example color
        const { shape, x, y } = this.exampleTetromino;
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if (shape[row][col]) {
                    // Draw block
                    this.ctx.fillRect(
                        (x + col) * this.cellSize,
                        (y + row) * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }
        }        
    }

    drawBoard() {
        this.ctx.strokeStyle = 'white'
        for (let x = this.x; x <= this.boardWidth + this.x; x += this.cellSize) {
            for (let y = this.y; y <= this.boardHeight + this.y; y += this.cellSize) {
                this.ctx.strokeRect(x, y, this.cellSize, this.cellSize);
            }
        }
    }

    drawUpcomingPiece(x, y, width, height) {
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(x, y, width, height)
    }

    drawHeldPiece(x, y, width ,height) {
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(x, y, width, height)
    }

    drawScore(x, y) {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '20px Arial'
        this.ctx.fillText(`Score: ${this.score}`, x, y)
    }

    draw() {
        this.drawTetromino()
        this.drawBoard()
        this.drawUpcomingPiece(this.x + this.boardWidth + 30, 100, 100, 100)
        this.drawHeldPiece(this.x-120, 100, 100, 100)
        this.drawScore(this.x-110, this.ctx.canvas.height - 700)
    }
}

export default Tetris