const w : number = window.innerWidth 
const h : number = window.innerHeight
const balls : number = 4 
const parts : number = 1 + balls 
const scGap : number = 0.02 / parts 
const sizeFactor : number = 12.8  
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#f44336",
    "#4A148C",
    "#006064",
    "#4CAF50",
    "#42A5F5"
]
const delay : number = 20 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.divideScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}

class DrawingUtil {

    static drawCircle(context : CanvasRenderingContext2D, x : number, y : number, r : number) {
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
    }

    static drawMultiBallMotion(context : CanvasRenderingContext2D, scale : number) {
        const sf : number = ScaleUtil.sinify(scale)
        const sf1 : number = ScaleUtil.divideScale(sf, 0, parts)
        const r : number = Math.min(w, h) / sizeFactor 
        context.save()
        context.translate(w / 2, h / 2)
        for (let j = 0; j < balls; j++) {
            DrawingUtil.drawCircle(
                context,
                0,
                -(h / 2 - r) * ScaleUtil.divideScale(sf, 1 + j, parts),
                r * sf1
            )
        }
        context.restore()
    }

    static drawMBMNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.fillStyle = colors[i]
        DrawingUtil.drawMultiBallMotion(context, scale)
    }
}
