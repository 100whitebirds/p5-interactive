const sketch = (p) => {
  let canvas
  let linesCount = 100
  let cosAdjustement = 0
  let sinAdjustement = 0
 
  p.setup = () => {
    canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
  }

  p.updateWithProps = props => {
    if (props.linesCount) {
      linesCount = props.linesCount
    }
  }

  p.draw = () => {
    
    p.background(10, 20, 30)
    
    p.rotateX(60)
    
    // p.rotateY(60)
    
    p.noFill()
    
    p.stroke(255)

    p.orbitControl([10], [10], [0.1])

    for (let i = 0; i < linesCount; i++) {
      let r = p.map(p.sin, 100, 100, 200, 100)
      let g = p.map(i, 10, 100, 100, 20)
      let b = p.map(p.cos(p.frameCount), -1, 100, 100, 0)

      p.stroke(r, g, b)

      p.rotate(60)

      p.beginShape()
      for (let j = 0; j < 360; j += 2) {
        let rad = i * 2
        let x = rad * p.cos(j + 10 )
        let y = rad * p.sin(j + 50)
        let z = p.sin(p.frameCount * 0.01 + i * 5) * 2000

        p.vertex(x, y, z)
      }
      p.torus(70, 20, 2, 12)
      p.torus(100, 100, 2, 1)
      // p.cone(700, 7000, 20, 2)
      p.endShape(p.CLOSE)
    }

    
  }
}

export default sketch