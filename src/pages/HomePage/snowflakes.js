/// by Ed Cavett
/// December 2021

//// Generate snowflakes of varying sizes.
//// Scale movements to size to create depth.
//// Apply rotations and lateral movements to
//// snowflakes to simulate flow and air friction.
//// Change the geometry of the snowflakes to
//// stylize their appearance and add complexity
//// to their shapes.

const sketch = (p) => {
  let snow

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    snow = new snowStorm()
    p.background(0, 255)
  }

  p.draw = () => {
    p.background(0, 255)
    snow.update()
  }


  function snowStorm() {
    this.pos = [] /// Each flake's location
    this.vel = [] /// Each flake's speed (related to scale).
    this.size = [] /// The flake's size (related to distance).
    this.flow = [] /// Adds a generalized p.noise movement
    this.breeze = [] /// Adds a wind force using p.noise
    this.rot = [] /// Sp.pin the snowflakes
    this.yoff = [] /// Each flake's unique p.noise value
    let dense = 175 /// How many flakes
    let sizeset = 0 /// Set the size based on order in array.

    for (let i = 0; i < dense; i++) {
      this.yoff.push(p.random(1000))
      this.pos.push(p.createVector(p.random(p.width), p.random(p.height)))

      /// Set the size using lerp.  This will make more small
      /// flakes with fewer large ones to add depth to the scene.
      sizeset = p.lerp(sizeset, 5, 0.1)
      this.size.push(7 - sizeset)

      /// Smaller flakes are in the distance, and should fall
      /// slower to maintain perspective.  Set velocities to scale.
      this.vel.push(p.createVector(0, this.size[i]))
      this.vel[i].mult(1.25)

      /// Each flake will fall in a general direction plus
      /// each flake has a unique deviation.  This simulates how
      /// aerodynamics disturb the constant rate of descent.
      this.flow.push(0)
      this.breeze.push(p.random(0.75))
      this.rot.push(p.random(-p.PI, p.PI))
    }

    this.update = function () {
      for (let i = 0; i < dense; i++) {
        this.yoff[i] += 0.05
        this.pos[i].add(this.vel[i])

        /// Generate common movement.
        this.flow[i] = p.map(p.noise((i + 1) * 0.01,
          this.yoff[i],
          p.frameCount * 0.01),
          0, 1,
          -this.size[i] * 4,
          this.size[i] * 4)

        /// Generate unique rotation.
        this.rot[i] = p.map(p.noise(this.yoff[i] * 0.1,
          p.frameCount * 0.00001),
          0, 1,
          -p.TWO_PI,
          p.TWO_PI)

        /// Provide for left or right wind force.
        let switchmove = p.map(p.noise(this.yoff[i] * 0.1,
          p.frameCount * 0.005),
          0, 1,
          -3, 3)
        /// Applies scale to wind force.
        let move = p.map(this.size[i], 1, 5, 0.1, 2)
        move *= switchmove

        /// Accumulate the wind force.
        this.pos[i].x += move


        this.bounds(i)

        p.push()
        /// Brighter colors in front (large flakes),
        /// dimmer colors in back (small flakes).
        let scol = p.map(this.size[i], 1, 5, 64, 255)
        p.stroke(scol, 150)
        // stroke(0,scol,scol,150);
        p.strokeWeight(this.size[i])


        p.push()
        p.translate(this.pos[i].x + this.flow[i],
          this.pos[i].y + this.flow[i])
        p.rotate(this.rot[i])

        /// Change the shape of the snowflakes.
        let flip = p.map(this.rot[i], -p.TWO_PI, p.TWO_PI,
          -this.size[i] * 4,
          this.size[i] * 4)

        let scale = this.size[i]
        p.line(-scale - flip, 0,
          scale + flip, 0)
        p.line(0, scale + flip,
          0, -scale - flip)
        p.line(scale, scale,
          -scale, -scale)
        p.line(scale, -scale,
          -scale, scale)
        p.pop()

        p.pop()

      }
    }

    this.bounds = function (i) {
      /// Reset to top or wrap-around when
      /// out-of-bounds.
      /// Keep current size, and factor velocity.

      if (this.pos[i].y > p.height) {
        this.pos[i] = p.createVector(p.random(p.width), 0)
        this.vel[i] = p.createVector(0, this.size[i])
        this.vel[i].mult(1.25)
      }
      if (this.pos[i].x > p.width) {
        this.pos[i].x = 0
      }
      if (this.pos[i].x < 0) {
        this.pos[i].x = p.width
      }
    }

  }

  /// Provide a way to toggle fullscreen to use
  /// as a screen saver.
  function mousePressed() {
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > p.height / 2 && p.mouseY < p.height) {
      let fs = p.fullscreen()
      p.fullscreen(!fs)
    }
  }
}

export default sketch