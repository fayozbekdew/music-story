//CSS-files
import './App.css'

//React-Router-Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

//Layouts
import RootLayout from './layouts/RootLayout'
import SpeakersLayout from './layouts/SpeakersLayout'
import HeadPhonesLayout from './layouts/HeadPhonesLayout'
import EarPhonesLayout from './layouts/EarPhonesLayout'

//Pages
import Home from './pages/home/Home'
import EarPhones from './pages/earphones/EarPhones'
import Speakers from './pages/speakers/Speakers'
import HeadPhones from './pages/headPhones/HeadPhones'

//Elements
import HeadPhones1 from './element/headPhonesElement/HeadPhones1'
import HeadPhones2 from './element/headPhonesElement/HeadPhones2'
import HeadPhones3 from './element/headPhonesElement/HeadPhones3'
import Speakers1 from './element/headPhonesElement/Speakers1'
import Speakers2 from './element/headPhonesElement/Speakers2'
import EarPhone1 from './element/headPhonesElement/EarPhone1'

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<RootLayout/>}>
        <Route index element={ <Home/>} />
        <Route path='headphones' element={<HeadPhonesLayout/> } >
              <Route index element={ <HeadPhones/>}/>
              <Route path='headphones1' element={ <HeadPhones1/> }/>
              <Route path='headphones2' element={ <HeadPhones2/> }/>
              <Route path='headphones3' element={ <HeadPhones3/> }/>
              <Route path='speakers1' element={ <Speakers1/> }/>
        </Route>
        <Route path='speakers' element={<SpeakersLayout/> } >
              <Route index element={ <Speakers/> }/>
              <Route path='speakers1' element={ <Speakers1/> }/>
              <Route path='speakers2' element={ <Speakers2/> }/>
        </Route>
        <Route path='earphones' element={<EarPhonesLayout/> } >
              <Route index element={ <EarPhones/> }/>
              <Route path='earphones1' element={ <EarPhone1/> }/>
        </Route>
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
