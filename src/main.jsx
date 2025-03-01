import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextoGeneralProvider } from './assets/Contextos/ContextoGeneral.jsx'
import { AuthProvider } from './assets/Contextos/ContextoAuth.jsx'
import { ContextoPaginaVentaProvider } from './assets/Paginas/ventas/ContextoVenta.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoGeneralProvider>
      <ContextoPaginaVentaProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </ContextoPaginaVentaProvider>
    </ContextoGeneralProvider>
  </StrictMode>,
)
