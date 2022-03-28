
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";





export const Mystery = () => {

    
const [data,setData] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8080/books`).then((res)=>{
      setData(res.data)
    })
  },[])

  
    console.log(data)

  return (
      <>
       <div>{data.map((e)=>{
        return <div className="books">
        <div >
        <img src={`${e.image}`}/>
         <h1>{e.title}</h1>
         <h3>{e.price}</h3>
        </div>
         
         </div>
         

       })}</div>
      </>
  );
};
