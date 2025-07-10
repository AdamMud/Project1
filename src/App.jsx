// import { useReducer } from "react"

import { useReducer } from "react"



// export default function App() {

//   function actions(state,action) {
//     if(action.type=="inc"){
//       return state+1
//     }
//     if(action.type=="dec"){
//       return state-1
//     }
//     if(action.type=="reset"){
//       return state=0
//     }
//     return state
//   }

//   let [count,dispatch]=useReducer(actions,0)

//   return(<>
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch({type:"inc"})}>+</button>
//       <button onClick={()=>dispatch({type:"dec"})}>-</button>
//       <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//     </div>



//   </>)
// }



// export default function App() {

//   let [data, dispatch] = useReducer(Crud, [
//     { name: "Azam", age: "22", id: 1 },
//     { name: "Muhammad", age: "12", id: 2 },
//     { name: "Sobir", age: "17", id: 3 },
//     { name: "Murod", age: "10", id: 4 }
//   ])



//   function Crud(state,action) {
//     if(action.type=="delete"){
//       return state=state.filter((e)=>e.id!=action.id)
//     }
//   }




//   return (<>

//     <div>{data.map((e)=>{
//       return(
//         <div key={e.id}>
//           <h1>{e.name}</h1>
//           <h2>{e.age}</h2>
//           <button onClick={()=>dispatch({type:"delete",id:e.id})}>Delete</button>
//         </div>
//       )
//     })}

//     </div>


//   </>)
// }

import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./pajes/layout/layout"
import Career from "./pajes/career/career"
import About from "./pajes/about/about"
import Security from "./pajes/security/security"
import LogIn from "./pajes/logIn/logIn"
import SignUp from "./pajes/signUp/signUp"
import Home from "./pajes/home/home"


export default function App() {

  let router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/career',
          element:<Career/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/security',
          element:<Security/>
        },
        {
          path:'/logIn',
          element:<LogIn/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        }
      ]
    }

  ])
   


  return(
    <RouterProvider router={router}/>
  )

  
  
}