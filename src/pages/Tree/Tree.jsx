import React, { useEffect, useState } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '@mui/material/Slider'
import s from '../../styles/SketchPage.module.scss'

const Tree = () => {
  const [linesCount, setLinesCount] = useState(10)

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setLinesCount(newValue)
    }
  }

  return (
    <div className={s.container}>
      <ReactP5Wrapper sketch={sketch} linesCount={linesCount} />
      <div className={s.sliderBar}>
        <div className={s.sliderContainer}>
          <Slider
            value={linesCount}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={100}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </div>
        <div className={s.sliderContainer}>
          <Slider
            value={linesCount}
            aria-label="Temperature"
            color="secondary"
            type="range"
            min={1}
            step={1}
            max={100}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
      <div className={s.navbar}>
        <Navbar />
      </div>
    </div>
  )
}

export default Tree
