import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"
import { lazy, Suspense } from "react"

import Layout from "./pages/Layout"
import Loader from "./components/Loader"
const Recommendation = lazy(()=> import('./pages/Recommendation')) 
const LandingPage = lazy(()=> import('./pages/LandingPage')) 
const Login = lazy(()=> import('./pages/Login')) 
const Profile = lazy(()=> import('./pages/Profile')) 


function App() {
  const token = localStorage.getItem('token')

  const routes = createBrowserRouter(createRoutesFromElements(
      <Route>
          <Route path="/" element={<Layout />} >
              <Route index element={<LandingPage />} />
              { 
                token ?
                  <Route path="/Hero" element={<Recommendation />} />
                  :
                  <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/load" element={<Loader />} />
                  </>
              } 

              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<div>404</div>} />
          </Route>
      </Route>
  ))

  return (
    <section>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={routes} />
        </Suspense>
    </section>
  )
}

export default App
