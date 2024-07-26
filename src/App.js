import Body from "./Components/Body";
import Header from "./Components/Header";

import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import {createBrowserRouter ,RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";

function App() {

let router = createBrowserRouter([
{

  path : "/",
  element : <Body/>,
  children : [
   {
    path : "/",
    element : <MainContainer/>
   },
   {
    path :  "/watch",
    element : <Watch/>
   }

  ]
}

])

  return (
    <div className="App h-screen">
   

    <Provider store={appstore}>

       <Header/>
       <RouterProvider router={router}/>

    </Provider>
    </div>
  );
}

export default App;
