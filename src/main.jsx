import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Router from './router'
import theme from "./theme"
import{ThemeProvider} from "@mui/material"
import{AuthProvider} from "./context"


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
 <ThemeProvider theme={theme}>
  <Router/>
  </ThemeProvider>
  </AuthProvider>
)
