// import { BookCard } from "../BookCard/BookCard";
import "./Home.css"
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";


export const Home = () => {

const [data,setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setData(res.data)
    })
  },[])

  
    console.log(data)

  return (
    <div className="homeContainer">
     <div className="sortButtons">
     <button onClick={()=>{ let arr = data.sort((a,b)=>a.price-b.price); setData([...arr]) }} className="sortByPriceAsc">sortByPriceAsc</button>
     <button onClick={()=>{ let arr = data.sort((a,b)=>b.price-a.price); setData([...arr]) }} className="sortByPriceDsc">sortByPriceDsc</button>
     <button onClick={()=>{ let arr = data.sort((a,b)=>a.id-b.id); setData([...arr]) }} className="sortByTitleAsc">sortByTitleAsc</button>
     <button onClick={()=>{ let arr = data.sort((a,b)=>b.id-a.id); setData([...arr]) }} className="sortByTitleDsc">sortByTitleDsc</button>
     </div>
      

     <Link to={'/mystery'} className="mystery">Mystery</Link> 
      <>
       <div>{data.map((el)=>{
        return <Link key={el.id} to={`/products/${el.id}`}><div className="bookCard">
            <div>
              <img src={`${el.image}`}/>
              <h3 className="title">{el.title}</h3>
              <h4 className="price">{el.price}</h4>
            </div>
            </div>
          </Link>;
         

       })}</div>
      </>
    </div>
  );
};
