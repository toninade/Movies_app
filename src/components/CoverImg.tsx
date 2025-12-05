import type React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../sass/layout/Cover.scss";
import { useEffect, useState } from "react";
import { apikey, popular } from "../modules/ApiKey";

interface Cover {
  title: string;
  prag: string;
  smallPrag: string;
  showImg: boolean;
  showInpt: boolean;
}

const CoverImg: React.FC<Cover> = ({
  title,
  prag,
  smallPrag,
  showImg,
  showInpt,
}) => {
  const [urlImg, setUrlImg] = useState("");
  useEffect(() => {
    fetch(`${popular}?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => {
        const randomNum = Math.floor(Math.random() * data.results.length);
        const randomImgUrl = data.results[randomNum].backdrop_path;
        const urlImgCover = `https://image.tmdb.org/t/p/w500${randomImgUrl}`;
        setUrlImg(urlImgCover);
      });
  }, [urlImg]);

  return (
    <div className="cover">
      <Container>
        <div className="cover-content">
          <div className="cover-text">
            <h1>{title}</h1>
            <p>{prag}</p>
            <em>{smallPrag}</em>
          </div>
          {showImg && <img className="img-cover" src={urlImg} alt="img" />}

          {showInpt && (
            <Form className="form-content">
              <input placeholder="Search 10000 Of Movies" />
              <Button className="btn-search">Search</Button>
            </Form>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CoverImg;
