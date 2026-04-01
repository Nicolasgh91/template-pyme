import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { contentServicios } from './data/content-servicios'
import { contentProductos } from './data/content-productos'
import { TemplatePage } from './pages/TemplatePage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" replace />} />
        <Route
          path="/servicios"
          element={<TemplatePage config={contentServicios} />}
        />
        <Route
          path="/productos"
          element={<TemplatePage config={contentProductos} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
