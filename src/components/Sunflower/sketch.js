const sketch = (p) => {
  let canvas 
  let dotsCount = 2000
  let frames = 2000
  let dotSize = 0.1
  let radius = 0.6

  p.setup = () => {
    const size = p.min(window.innerWidth, window.innerHeight)
    p.createCanvas(size, size);
    // canvas = p.createCanvas(p.windowHeight, p.windowHeight, p.WEBGL)
    p.noStroke()
    p.colorMode(p.HSL, 1)
  }

  p.updateWithProps = props => {
    if (props.dotsCount) {
      dotsCount = props.dotsCount
    }
    if (props.frames) {
      frames = props.frames
    }
    if (props.dotSize) {
      dotSize = props.dotSize
    }
    if (props.radius) {
      radius = props.radius
    }
  }

  const cosn = (v) => {
    return p.cos(v * p.TWO_PI) * 0.5 + 0.5
  }

  const invCosn = (v) => {
    return 1 - cosn(v)
  }

  const PHI = (1 + Math.sqrt(5)) / 2

  let t
  
  p.draw = () => {
    p.scale(p.width, p.height)
    // t = p.mouseX / p.width; 
    t = p.fract(p.frameCount / frames)
    p.background(0)
    p.translate(0, 0, 0)

    const count = dotsCount * invCosn(t)
    for (let i = 1; i < count; i++) {
      const f = i / count
      const angle = i * PHI
      const dist = f * radius 

      const x = 0.5 + p.cos(angle + 0.5 * p.TWO_PI) * dist
      const y = 0.5 + p.sin(angle + 0.5 * p.TWO_PI) * dist

      const sig = p.pow(cosn(f - t * 6), 2)
      const r = f * sig  * dotSize

      const hue = p.fract(t + f * 0.5)
      const sat = 1
      const light = 0.6 * sig + 0.25
      const clr = p.color(hue, sat, light)
      p.fill(clr)

      p.circle(x, y, r)
    }
  }
}

export default sketch