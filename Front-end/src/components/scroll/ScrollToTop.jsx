// @ts-nocheck
import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'



export default function ScrollToTop() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <Zoom in={useScrollTrigger()}>
        <Fab onClick={scrollTop} size="medium" sx={{position:"fixed", bottom:33, right:33}} color="primary" aria-label="add">
        <KeyboardArrowUp size="meduim"/>
        </Fab>
    </Zoom>
  )
}
