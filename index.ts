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