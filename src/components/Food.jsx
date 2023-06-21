import data from "../api/food.json"
import Card from './Card'
import './Food.css'

const Food = () => {
  return(
    <div className="wrapper">
        {data.platos.map(item=>(
          <li key={item.nombre}>
            <Card plato={item}/>
          </li>
        ))}
    </div>
  )
}

export default Food;