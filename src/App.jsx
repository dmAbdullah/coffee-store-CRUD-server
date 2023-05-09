import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee';

function App() {
  const coffees= useLoaderData();

  return (
    <div  className='m-20'>
      
      <h1 className='text-6xl text-purple-600 '>Hoooot Coffees:{coffees.length} </h1>
     <div className='md:grid-cols-2 gap-6 mb-52'>

     {
      coffees.map(coffee=><Coffee key={coffee._id} coffee={coffee} coffees={coffees}></Coffee>)
     }
     </div>
    </div>
  )
}

export default App
