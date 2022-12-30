// // import Login from "../Pages/Login";
// import Register from "../src/Pages/Login/Register";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddComments from "../Pages/Comments/AddComments";
import Media from "../Pages/Media/Media";
import MediaDetails from "../Pages/Media/MediaDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/media',
                element:<Media></Media>,
                loader: () => fetch('http://localhost:5000/all-media')
            },
            {
                path:'media/:id',
                element: <MediaDetails></MediaDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/media/${params.id}`)
            },
            {
                path:'/addcomment/:id',
                element:<AddComments></AddComments>,
                loader:({params}) => fetch(`http://localhost:5000/media/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/about',
                element:<About></About>
            }
        ]
    }
])
export default router;