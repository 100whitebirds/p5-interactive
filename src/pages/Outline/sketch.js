const sketch = (p) => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
  }

  p.updateWithProps = props => {

  }

  p.draw = () => {
    p.background(10, 20, 30)

    p.stroke(255)

    p.noFill()

    p.translate(p.width / 100, p.height / 100)

    p.beginShape()
    for (let i = 0; i < 359; i++) {
      let r1Min = p.map(p.sin(p.frameCount), -1, 1, 50, 100)
      let r1Max = p.map(p.sin(p.frameCount * 2), -1, 1, 100, 0)

      let r2Min = p.map(p.sin(p.frameCount * 2), -1, 1, 100, 50)
      let r2Max = p.map(p.sin(p.frameCount), -1, 1, 0, 100)

      let r1 = p.map(p.sin(i * 3), -1, 1, r1Min, r1Max)
      let r2 = p.map(p.sin(i * 6 + 90), -1, 1, r2Min, r2Max)
      let r = r1 + r2
      let x = r * p.cos(i)
      let y = r * p.sin(i)
      p.vertex(x, y)
    }
    p.endShape(p.CLOSE)
  }
}

export default sketch