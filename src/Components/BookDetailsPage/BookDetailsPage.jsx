import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const BookDetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setData([res.data]);
    });
  }, []);

  console.log(data);

  return (
    <>
      {data.map((e) => {
        return (
          <div className="bookContainer" key={e.id}>
            <h2 className="title">{e.title}</h2>
            <img className="image" src={e.image} alt="#" />
            <div className="author">{e.author}</div>
            <div className="description">{e.description}</div>
            <div className="price">{e.price}</div>
            <div className="section">{e.id}</div>
            <div className="isbnNumber">{e.isbnNumber}</div>
            <ul className="reviews">
              <li>{e.reviews}</li>
              <li>{e.reviews}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
