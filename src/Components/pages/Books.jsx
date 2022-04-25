import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  //add required style here
  display: grid;

  width: 65%;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getBooksData();
  }, []);

  const getBooksData = async () => {
    try {
      let res = await fetch("http://localhost:8080/books");
      let data1 = await res.json();

      setData([...data1]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {
          /* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */

          data.map((el) => {
            return <BookCard {...el} key={el.id} />;
          })
        }
      </Grid>
    </>
  );
};
export default Books;
