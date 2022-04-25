import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Flex = styled.div`
  //  add required style

  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;
  return (
    <>
      <Link to={`/books/${id}`}>
        <Flex>
          <img src={thumbnailUrl} alt={title} height="200px" width={"200px"} />
          <h3>{title}</h3>
          <h4>{isbn}</h4>
        </Flex>
      </Link>
    </>
  );
};
