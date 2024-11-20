import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {RootCanal, DentalFilling, Dentures, DentalImplants, AlignersBraces, TeethCleaning, TeethWhitening, SmileMakeover, CrownsBridges, KidsDental, 
  ToothExtraction, ScalingPolishing, Checkups, Home, Layout, AboutUs, TreatmentPage, ContactUs
} from './pages/page.js'
import Form from './components/Form.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/treatments' element={<TreatmentPage/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/RootCanal' element={<RootCanal/>}/>
      <Route path='/DentalFilling' element={<DentalFilling/>}/>
      <Route path='/Dentures' element={<Dentures/>}/>
      <Route path='/DentalImplants' element={<DentalImplants/>}/>
      <Route path='/Aligners&Braces' element={<AlignersBraces/>}/>
      <Route path='/TeethCleaning' element={<TeethCleaning/>}/>
      <Route path='/TeethWhitening' element={<TeethWhitening/>}/>
      <Route path='/SmileMakeover' element={<SmileMakeover/>}/>
      <Route path='/Crowns&Bridges' element={<CrownsBridges/>}/>
      <Route path='/KidsDental' element={<KidsDental/>}/>
      <Route path='/ToothExtraction' element={<ToothExtraction/>}/>
      <Route path='/Scaling&Polishing' element={<ScalingPolishing/>}/>
      <Route path='/RegularCheckups' element={<Checkups/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
