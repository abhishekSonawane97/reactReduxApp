import React from "react";
import App from "./App";
import Checkout from "./Components/Checkout";
import Thali from "./Components/Thali";

const Routes = [
{
    path: "/",
    element: <App />,
},
{
    path: "/thali",
    element: <Thali />,
},
{
    path: "/chekout",
    element: <Checkout />,
},
]

export default Routes;