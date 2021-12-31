import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import s from './Home.module.scss'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => history.push('/landscape'), 6500)
  }, [])

  return (
    <Container className={s.container} maxWidth="lg">
      <Box sx={{ bgcolor: 'deeppink', height: '300px', maxHeight: '600px', borderRadius: '0 0 30px 30px'}}>
        <div className={s.typedOut}>
          This humble app was designed to show what you can create with <a target="_blank" href="https://p5js.org">P5.js</a> library.
        </div>
        <div className={s.typedOutLatter}>
          Play with demos and have some fun :)
        </div>
      </Box>
    </Container>
  )
}

export default Home
