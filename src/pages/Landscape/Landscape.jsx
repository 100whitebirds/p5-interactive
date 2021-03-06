import React, { useState } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import Navbar from '../../components/Navbar/Navbar'
import { Slider, Typography } from '@mui/material'
import s from '../../styles/SketchPage.module.scss'
import { NavInfoIcon } from '../../components/NavInfoIcon/NavInfoIcon'

const Landscape = () => {
  const [cellSize, setCellSize] = useState(15)
  const [offset, setOffset] = useState(0.1)
  const [statica, setStatica] = useState(300)
  const [spaceBetween, setSpaceBetween] = useState(1)
  const [elevation, setElevation] = useState(260)

  return (
    <div className={s.container}>
      <ReactP5Wrapper 
        sketch={sketch} 
        cellSize={cellSize} 
        offset={offset} 
        statica={statica}
        spaceBetween={spaceBetween}
        elevation={elevation}
      />
      <div className={s.sliderBar}>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Cell size
          </Typography>
          <Slider
            value={cellSize}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={10}
            step={1}
            max={300}
            onChange={(event, newValue) => setCellSize(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Vertical offset
          </Typography>
          <Slider
            value={offset}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={0}
            step={0.01}
            max={1}
            onChange={(event, newValue) => setOffset(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Dynamic - Static
          </Typography>
          <Slider
            value={statica}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={1000}
            onChange={(event, newValue) => setStatica(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Interspace
          </Typography>
          <Slider
            value={spaceBetween}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={0.01}
            max={10}
            onChange={(event, newValue) => setSpaceBetween(newValue)}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Typography color="white" gutterBottom>
            Elevation
          </Typography>
          <Slider
            value={elevation}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={1000}
            onChange={(event, newValue) => setElevation(newValue)}
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

export default Landscape
