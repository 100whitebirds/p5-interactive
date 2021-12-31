const sketch = (p) => {
  let canvas
  let cellSize = 30
  let offset = 0.1
  let statica = 100
  let spaceBetween = 1
  let elevation = 100

  p.setup = () => {
    canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
    p.noiseDetail(1)
  }

  p.updateWithProps = props => {
    if (props.cellSize) {
      cellSize = props.cellSize
    }
    if (props.offset) {
      offset = props.offset
    }
    if (props.statica) {
      statica = props.statica
    }
    if (props.spaceBetween) {
      spaceBetween = props.spaceBetween
    }
    if (props.elevation) {
      elevation = props.elevation
    }
  }

  p.draw = () => { 
    p.background(100, 200, 150)
    p.orbitControl([10], [10], [0.05])
    p.rotateX(90)
    p.rotateZ(p.frameCount / 4)
    p.rotateX(p.map(p.cos(p.frameCount / 4), -1, 1, 30, -30))
    p.rotateY(p.map(p.sin(p.frameCount / 4), -1, 1, -30, 30))
    // p.noStroke()
    p.directionalLight([255, 50, 150], p.createVector(1, -1, -1))
    p.directionalLight([255], p.createVector(0, 0, -1))

    let w = cellSize
    let start = (statica === 1000 ? 0 : p.frameCount / statica)

    let xoff = 0
    for (let x = -p.width / 2; x <= p.width / 2; x += w) {
      let yoff = 0
      for (let y = -p.height / 2; y <= p.height / 2; y += w) {
        let h = p.map(p.noise(xoff + start, yoff + start), 0, 1, -elevation, elevation)
        p.push()
        p.translate(x * spaceBetween, y * spaceBetween, -h / 2)
        p.box(w, w, h)
        p.pop()
        yoff += offset
      }
      xoff += offset
    }
  }
}

export default sketch