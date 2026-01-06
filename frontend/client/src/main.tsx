import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/home/App.tsx'
import EditTaskPage from './pages/forms/EditTaskPage.tsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

// Esse caba aqui define as rotas, o famoso Router React
const router = createBrowserRouter([
  {
    path: `/edit_task/:id`,
    element : <EditTaskPage />
  },
  {
    path: "/new",
    element: <App />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

