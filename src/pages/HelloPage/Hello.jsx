import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import snowflakes from './snowflakes'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import s from './Hello.module.scss'
import { BunnyGirl } from '../../components/BunnyGirl/BunnyGirl'

const Hello = () => {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => history.push('/landscape'), 9000)
  }, [])

  return (
    <>
      <ReactP5Wrapper
        className={s.snowflakes}
        sketch={snowflakes}
      />
      <Container className={s.container}>
        <Box className={s.box}>
          <BunnyGirl />
          <Box>
            <a className={s.nameTag} target="_blank" href="https://github.com/RAILRAIL">Elis</a>
          </Box>
          <Box className={s.textBox}>
            <div className={s.typedOutFirst}>
              Hi there, lovely Human creature!
            </div>
            <div className={s.typedOutSecond}>
              This humble app was designed to show what you can create with <a target="_blank" href="https://p5js.org">P5.js</a> library.
            </div>
            <div className={s.typedOutThird}>
              Play with demos and have some fun !
            </div>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Hello
