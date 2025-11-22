import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <Router>
        <App />
      </Router>
    </PrimeReactProvider>
  </StrictMode>,
)
