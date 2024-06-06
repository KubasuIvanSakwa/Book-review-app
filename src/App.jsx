import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  const token = localStorage.getItem('token')

  const router = createBrowserRouter(createRoutesFromElements(
      <Route>
      { 
        token ?
          <Route path="/" element={<Home />} />
          :
          <Route path="/login" element={<Login />} />
      }
      </Route>
  ))

  return (
    <section>
        <RouterProvider router={router} />
    </section>
  )
}

export default App
