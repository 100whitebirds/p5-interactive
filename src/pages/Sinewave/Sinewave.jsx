import React, { useState } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import Navbar from '../../components/Navbar/Navbar'
import { Slider, Typography } from '@mui/material'
import s from '../../styles/SketchPage.module.scss'
import { NavInfoIcon } from '../../components/NavInfoIcon/NavInfoIcon'

const Sinewave = () => {
  const [xRectRad, setXRectRad] = useState(600)
  const [yRectRad, setYRectRad] = useState(600)
  const [linesCount, setLinesCount] = useState(200)
  const [rotationLevel, setRotationLevel] = useState(100)

  return (
    <div className={s.container}>
      <ReactP5Wrapper 
        sketch={sketch} 
        xRectRad={xRectRad} 
        yRectRad={yRectRad} 
        linesCount={linesCount}
        rotationLevel={rotationLevel}
      />
      <div className={s.sliderBar}>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            X-radius
          </Typography>
          <Slider
            value={xRectRad}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={1200}
            onChange={(event, newValue) => setXRectRad(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Y-radius
          </Typography>
          <Slider
            value={yRectRad}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={1200}
            onChange={(event, newValue) => setYRectRad(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Lines count
          </Typography>
          <Slider
            value={linesCount}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={200}
            onChange={(event, newValue) => setLinesCount(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Rotation level
          </Typography>
          <Slider
            value={rotationLevel}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={300}
            onChange={(event, newValue) => setRotationLevel(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
      <div className={s.navbar}>
        <Navbar />
      </div>
      <NavInfoIcon />
    </div>
  )
}

export default Sinewave