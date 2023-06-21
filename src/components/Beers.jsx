import data from "../api/beers.json"
import Card from './Card'
import './Food.css'

const Beers = () => {
  return(
    <div className="wrapper">
        {data.beers.map(item=>(
          <li key={item.nombre}>
            <Card plato={item}/>
          </li>
        ))}
    </div>
  )
}

export default Beers;