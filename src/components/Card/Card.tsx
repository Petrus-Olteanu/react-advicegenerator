import{useState, useEffect} from "react"; 
import styles from "./card.module.css";

interface IAdvice{
    text:string | null,
    id:number | null
}





const Card = () => {
    const [advice, setAdvice] = useState<IAdvice>({text: null, id:null})

    useEffect(()=>{
        fetch("https://api.adviceslip.com/advice")
        .then(res=>res.json())
        .then(data=>{
            setAdvice({
                text:data.slip.advice,
                id: data.slip.id
            })
        })
    },[])
  return (
    <div>
        <h2>{advice.id}</h2>
        <h2>"{advice.text}"</h2>
    </div>
  )
}

export default Card