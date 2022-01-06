import React, { useState } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '@mui/material/Slider'
import { Typography } from '@mui/material'
import s from '../../styles/SketchPage.module.scss'
import { NavInfoIcon } from '../../components/NavInfoIcon/NavInfoIcon'

const Sunflower = () => {
  const [dotsCount, setDotsCount] = useState(2000)
  const [frames, setFrames] = useState(2000)
  const [dotSize, setDotSize] = useState(0.5)
  const [radius, setRadius] = useState(0.6)

  return (
    <div className={s.container}>
      <ReactP5Wrapper 
        sketch={sketch} 
        dotsCount={dotsCount} 
        frames={frames} 
        dotSize={dotSize} 
        radius={radius}
      />
      <div className={s.sliderBar}>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Dots count
          </Typography>
          <Slider
            value={dotsCount}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={10000}
            onChange={(event, newValue) => setDotsCount(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Dot size
          </Typography>
          <Slider
            value={dotSize}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={0.05}
            step={0.1}
            max={1.5}
            onChange={(event, newValue) => setDotSize(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Velocity
          </Typography>
          <Slider
            value={frames}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={5000}
            onChange={(event, newValue) => setFrames(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Scale
          </Typography>
          <Slider
            value={radius}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={0.1}
            step={0.1}
            max={3}
            onChange={(event, newValue) => setRadius(newValue)}
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

export default Sunflower
