import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getbooks();
  }, []);
  const getbooks = () => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data);
        console.log("books:", books);
      })
      .catch((e) => {
        console.log("err:", e.message);
      });
  };
  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <div className="sortButtons">
        <button
          onClick={() => {
            let arr = books.sort((a, b) => a.Price - b.Price);
            setBooks([...arr]);
          }}
          className="sortByPriceAsc"
        >
          sortByPriceAsc
        </button>
        <button
          onClick={() => {
            let arr = books.sort((a, b) => b.Price - a.Price);
            setBooks([...arr]);
          }}
          className="sortByPriceDsc"
        >
          sortByPriceDsc
        </button>
        <button
          onClick={() => {
            let arr = books.sort((a, b) => a.id - b.id);
            setBooks([...arr]);
          }}
          className="sortByTitleAsc"
        >
          sortByTitleAsc
        </button>
        <button
          onClick={() => {
            let arr = books.sort((a, b) => b.id - a.id);
            setBooks([...arr]);
          }}
          className="sortByTitleDsc"
        >
          sortByTitleDsc
        </button>
      </div>

      <Main className="mainContainer">
        {books.map((e) => {
          return (
            <Link key={e.id} to={`/bookdetailspage/${e.id}`}>
              <div className="bookCard">
                <div>
                  <img src={e.book} />
                  <h3 className="title">{e.title}</h3>
                  <h4 className="price">{e.Price}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </Main>
    </div>
  );
};
