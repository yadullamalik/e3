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
            <img className="image" src={e.book} alt="#" />
            <div className="author">{e.Author}</div>
            <div className="description">{e.Description}</div>
            <div className="price">{e.Price}</div>
            <div className="section">{e.id}</div>
            <div className="isbnNumber">{e.ISBN}</div>
            <ul className="reviews">{e.reviews}</ul>
          </div>
        );
      })}
    </>
  );
};
