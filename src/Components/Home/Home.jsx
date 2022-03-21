import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res);
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
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {books.data.map((e) => {
          return (
            <div key={e.id}>
              <image src={e.book} />
              {e.title}
              {e.price}
              <BookCard
                id={e.id}
                imageUrl={e.book}
                title={e.title}
                price={e.price}
              />
            </div>
          );
        })}
      </Main>
    </div>
  );
};
