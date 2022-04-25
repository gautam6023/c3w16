import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
  gap: 30px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 8px;
  background-color: #e6f3ff;
  margin-top: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  h2 {
    color: red;
  }
  img {
    width: 250px;
  }
  div {
    width: 70%;
  }
`;

// add style for button
export const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  border-radius: 1000px;
  background-color: crimson;
  color: white;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const SingleBook = () => {
  const [data, setData] = useState({});
  const params = useParams();

  console.log(params);
  let id = params.id;
  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id

    getSingleBookData();
  }, []);

  const getSingleBookData = async () => {
    try {
      let res = await fetch(`http://localhost:8080/books/${id}`);
      let data = await res.json();

      console.log(data);
      setData({ ...data });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
