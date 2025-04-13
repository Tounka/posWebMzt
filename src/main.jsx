import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextoGeneralProvider } from './assets/Contextos/ContextoGeneral.jsx'
import { AuthProvider } from './assets/Contextos/ContextoAuth.jsx'
import { ContextoPaginaVentaProvider } from './assets/Paginas/ventas/ContextoVenta.jsx'
import { ContextoInventariosProvider } from './assets/Contextos/ContextoInventarios.jsx'
import { ContextoReportesProvider } from './assets/Contextos/Reportes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextoGeneralProvider>
        <ContextoPaginaVentaProvider>
          <AuthProvider>
            <ContextoInventariosProvider>
              <ContextoReportesProvider>
                <App />
              </ContextoReportesProvider>
            </ContextoInventariosProvider>
          </AuthProvider>
        </ContextoPaginaVentaProvider>
      </ContextoGeneralProvider>
    </BrowserRouter>
  </StrictMode>,
)
