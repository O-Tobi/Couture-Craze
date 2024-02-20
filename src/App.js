
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/routes/sign-in/sign-in";



const router = createBrowserRouter(
  createRoutesFromElements(
    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='sign-in' element={<SignIn />} />
  
        </Route>
    
  )
)

const App = () => {
  return (
    <RouterProvider router = {router}/>

  );
}

export default App;
