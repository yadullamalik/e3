import {useState} from "react"
import axios from "axios"

export const Data = ()=>{


    const[data,setData] = useState({
     
    })

  function change(e){
  const {id,value} = e.target;
  setData({...data,[id]:value})

  }

  console.log(data)



    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            axios.post("http://localhost:8080/books",data)
        }}>
            <input 
            placeholder="Titie"
              id="title"
              onChange={change}
              type="text"
            />
               <input 
            placeholder="Author"
              id="author"
              onChange={change}
              type="text"
            />
               <input 
            placeholder="Description"
              id="description"
              onChange={change}
              type="text"
            />
              <input 
            placeholder="Price"
              id="price"
              onChange={change}
              type="text"
            />
              <input 
            placeholder="ISBN"
              id="isbn"
              onChange={change}
              type="text"
            />
            <input 
            placeholder="image"
              id="image"
              onChange={change}
              type="text"
            />
            <input 
            placeholder="reviews"
              id="reviews"
              onChange={change}
              type="text"
            />
            <input 
            placeholder="ID"
              id="ID"
              onChange={change}
              type="text"
            />
            <input type="submit" value="submit"/>
            </form>
        </>
    )
}