
import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";



const router = createBrowserRouter(
  createRoutesFromElements(
    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
  
        </Route>
    
  )
)

const App = () => {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
