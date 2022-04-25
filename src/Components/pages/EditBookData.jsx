import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18%;

  margin: auto;
  margin-top: 150px;
  gap: 30px;
`;
// add style for text area
export const Textarea = styled.textarea`
  height: 60px;
  text-indent: 14px;
  font-size: 16px;
`;

export const EditBookData = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(thumbnail, desc);
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page

    getEditBook();
    navigate(-1);
  };

  const getEditBook = async () => {
    try {
      let res = await fetch(`http://localhost:8080/books/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          longDescription: desc,
          thumbnailUrl: thumbnail,
        }),
      });

      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
