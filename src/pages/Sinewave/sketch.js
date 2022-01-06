const sketch = (p) => {
  let canvas
  let linesCount = 200
  let rotationLevel = 100
  let xRectRad = 600
  let yRectRad = 600

  p.setup = () => {
    const size = p.min(window.innerWidth, window.innerHeight)
    p.createCanvas(size, size, p.WEBGL)
    // canvas = p.createCanvas(p.windowHeight + (p.windowHeight / 3), p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
    p.rectMode(p.CENTER)
  }

  p.updateWithProps = props => {
    if (props.xRectRad) {
      xRectRad = props.xRectRad
    }
    if (props.yRectRad) {
      yRectRad = props.yRectRad
    }
    if (props.linesCount) {
      linesCount = props.linesCount
    }
    if (props.rotationLevel) {
      rotationLevel = props.rotationLevel
    }
  }

  p.draw = () => {
    p.orbitControl([10], [10], [0.05])
    p.background(10, 20, 30)
    
    p.noFill()
    
    for (let i = 0; i < linesCount; i++) {
      p.push()
      p.rotateZ(p.sin(p.frameCount + i) * rotationLevel)
      // p.rotateX(p.map(p.cos(p.frameCount / 10), -1, 1, 30, -30))
      // p.rotateY(p.map(p.tan(p.frameCount / 4), -1, 1, -30, 30))

      let r = p.map(p.sin(p.frameCount), -1, 1, 50, 255)
      let g = p.map(p.cos(p.frameCount / 2), -1, 1, 50, 255)
      let b = p.map(p.sin(p.frameCount / 4), -1, 1, 50, 255)

      p.stroke(r, g, b)

      p.rect(0, 0, xRectRad - i * 3, yRectRad - i * 3, 150 - i)

      p.pop()

      p.push()
      p.rotateZ(p.tan(p.frameCount + i) * rotationLevel)
      p.rotateX(p.map(p.cos(p.frameCount / 4), -1, 1, 30, -30))
      p.rotateY(p.map(p.sin(p.frameCount / 4), -1, 1, -30, 30))

      p.stroke(b, g, r)

      p.rect(0, 0, yRectRad/10 - i * 3, xRectRad/10 - i * 3, 15 - i)

      p.pop()
    }


  }
}

export default sketch