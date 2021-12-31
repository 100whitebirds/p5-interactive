const sketch = (p) => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
    p.noLoop()
  }

  p.updateWithProps = props => {

  }

  p.draw = () => { 
    p.background(200)
    
    p.translate(0, 300, 0)
    
    p.rotateY(p.frameCount)

    // p.randomSeed(1)

    branch(150)
  }

  const branch = (len) => {
    p.strokeWeight(p.map(len, 10, 100, 0.5, 5))
    p.stroke(70, 40, 20)

    p.line(0, 0, 0, 0, -len - 2, 0)

    p.translate(0, -len, 0)

    if (len > 10) {
      for (let i = 0; i < 3; i++) {
        p.rotateY(p.random(100, 140))
        
        p.push()

        p.rotateZ(p.random(20, 50))
        branch(len * 0.7)

        p.pop()
      }
    } else {
      let r = 210
      let g = 20
      let b = 100

      p.fill(r, g, b, 200)

      p.translate(5, 0, 0)

      p.rotateZ(90)

      p.beginShape()
      for (let i = 45; i < 135; i++) {
        let rad = 10
        let x = rad * p.cos(i)
        let y = rad * p.sin(i)
        p.vertex(x, y)
      }
      for (let i = 135; i > 45; i--) {
        let rad = 6
        let x = rad * p.cos(i)
        let y = rad * p.sin(-i) + 10
        p.vertex(x, y)
      }
      p.endShape(p.CLOSE)
    }
  }
}

export default sketch