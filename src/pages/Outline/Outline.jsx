import React, { useEffect, useState } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import Navbar from '../../components/Navbar'
import { Slider } from '@mui/material'
import s from '../../styles/SketchPage.module.scss'

const Outline = () => {
  const [innerRectRad, setInnerRectRad] = useState(100)

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setInnerRectRad(newValue)
    }
  }

  return (
    <div className={s.container}>
      <ReactP5Wrapper sketch={sketch} innerRectRad={innerRectRad} />
      <div className={s.sliderBar}>
        <div className={s.sliderContainer}>
          <Slider
            value={innerRectRad}
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
            value={innerRectRad}
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
      <Navbar />
    </div>
  )
}

export default Outline
