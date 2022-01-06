import React from 'react'
import { useHistory } from 'react-router'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import snowflakes from '../HelloPage/snowflakes'
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import s from './Info.module.scss'
import { BunnyGirl } from '../../components/BunnyGirl/BunnyGirl'

const Info = () => {
  const history = useHistory()
  return (
    <>
      <ReactP5Wrapper
        className={s.snowflakes}
        sketch={snowflakes}
      />
      <Container className={s.container}>
        <BunnyGirl />
        <Box>
          <a className={s.nameTag} target="_blank" href="https://github.com/RAILRAIL">Elis</a>
        </Box>
        <Box className={s.textBox}>
          <div className={s.typedOut}>
            You can explore and learn p5.js out there: <a target="_blank" href="https://p5js.org">p5js.org</a> !
          </div>
          <div className={s.typedOutLatter}>
            Source code for sketches: <a target="_blank" href="https://github.com/RAILRAIL/p5-interactive">github</a> 
          </div>
        </Box>
        <Button className={s.button} onClick={() => history.push('sunflower')}>Back to demos</Button>
      </Container>
    </>
  )
}

export default Info
