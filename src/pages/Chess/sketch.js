const sketch = (p) => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.angleMode(p.DEGREES)
    p.noiseDetail(1)
  }

  p.updateWithProps = props => {

  }

  p.draw = () => { 
    p.background(100, 150, 100)
  
    p.translate(0, 0, -400)
    
    p.rotateX(90)
    p.rotateZ(p.frameCount / 4)
    p.rotateX(p.map(p.cos(p.frameCount / 4), -1, 1, 30, -30))
    p.rotateY(p.map(p.sin(p.frameCount / 4), -1, 1, -30, 30))
    // p.noStroke()
    p.directionalLight([255, 50, 150], p.createVector(1, -1, -1))
    p.directionalLight([255], p.createVector(0, 0, -1))

    let w = 90 
    let start = p.frameCount / 100

    let xoff = 0
    for (let x = -p.width / 2; x <= p.width / 2; x += w) {
      let yoff = 0
      for (let y = -p.height / 2; y <= p.height / 2; y += w) {
        let h = p.map(p.noise(xoff + start, yoff + start), 0, 1, -100, 100)
          p.push()
          p.translate(x, y, -h * 2)
          p.box(w, w, h)
          p.pop()
          yoff += 1
      }
      yoff = 0
      for (let y = -p.height / 2; y <= p.height / 2; y += w) {
        let h = p.map(p.noise(xoff + start, yoff + start), 0, 1, -100, 100)
        p.push()
        p.translate(x, y, -h * 5)
        p.box(30, 30, h)
        p.pop()
        yoff += 2
      }
      xoff += 1
    }
  }
}

export default sketch