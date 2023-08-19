//CSS-files
import './App.css'

//React-Router-Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

//Layouts
import RootLayout from './layouts/RootLayout'

//Pages
import Home from './pages/home/Home'
import EarPhones from './pages/earphones/EarPhones'
import Speakers from './pages/speakers/Speakers'
import HeadPhones from './pages/headPhones/HeadPhones'

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<RootLayout/>}>
        <Route index element={ <Home/>} />
        <Route path='speakers' element={ <Speakers/> }/>
        <Route path='earphones' element={ <EarPhones/> }/>
        <Route path='headphones' element={ <HeadPhones/> }/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
