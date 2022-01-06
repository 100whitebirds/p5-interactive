import React from 'react'
import { useHistory } from 'react-router-dom'
import s from './NavInfoIcon.module.scss'
import InfoIcon from '@mui/icons-material/Info'

export const NavInfoIcon = () => {
  const history = useHistory()
  return (
    <div className={s.info}>
      <InfoIcon onClick={() => history.push('info')} />
    </div>
  )
}
