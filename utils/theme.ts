import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'

const baseTheme = responsiveFontSizes(
  createTheme()
)

export default createTheme(baseTheme)
