import React, { useEffect, useState } from "react";
import axios from "axios";
import { apikey } from "../modules/ApiKey";
import { Button, Container } from "react-bootstrap";
import LoadingPinner from "./Loading";
import "../sass/layout/HomeCardMovies.scss";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  // for tv show

  first_air_date: string;
  name: string;
}

interface Basic {
  api_endpoint: string;
  header_line: string;
  numberOfMovies: number;
  showtv: boolean;
  showBtns: boolean;
  showMovies: boolean;
}

const HomeCardMovies: React.FC<Basic> = ({
  api_endpoint,
  header_line,
  numberOfMovies,
  showBtns,
  showtv,
  showMovies,
}) => {
  const [showitems, setShowItems] = useState<Movie[]>([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [totalpages, setTotalpages] = useState(1);
  const [isloading, setIsloading] = useState(false);

  //* data futching

  useEffect(() => {
    const datafetching = async () => {
      try {
        const response = await axios.get(`${api_endpoint}?api_key=${apikey}`, {
          params: { page: currentpage },
        });
        const { results, total_pages } = response.data;
        setShowItems(results.slice(0, numberOfMovies));
        setTotalpages(total_pages);
        setTimeout(() => {
          setIsloading(true);
        }, 2000);
      } catch (err) {
        console.log(`same thing want wrong ,${err}`);
      }
    };

    datafetching();
  }, [currentpage]);

  //! prev button method

  const prevpage = () => {
    if (currentpage > 1) {
      setCurrentPage((current) => current - 1);
    }
  };

  // //! next button method

  const nextpage = () => {
    if (currentpage < totalpages) {
      setCurrentPage((current) => current + 1);
    }
  };

  //! date formaing function

  function formaterDate(datestring: string | number | Date) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    const dateFormater = new Date(datestring);
    return dateFormater.toLocaleDateString("en-Us", options);
  }

  //* formating movie rating

  function formatingRate(rate: number) {
    return Math.floor((rate / 10) * 100);
  }

  //* Get id movie

  return (
    <>
      {!isloading ? (
        <LoadingPinner />
      ) : (
        <div className="section">
          <Container fluid>
            <div className="content">
              <div className="header_line">
                <h1 className="header">{header_line}</h1>
              </div>
              <div className="movies-content">
                {showitems.map((ele) => (
                  <div className="card-movie" key={ele.id}>
                    <div className="movie-img">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${ele.poster_path}`}
                      />

                      <span className="rating-movie">{`${formatingRate(
                        ele.vote_average
                      )}%`}</span>
                    </div>

                    {showMovies && (
                      <div className="details">
                        <h3>{ele.title}</h3>
                        <p>{formaterDate(ele.release_date)}</p>
                      </div>
                    )}
                    {showtv && (
                      <div className="details">
                        <h3>{ele.name}</h3>
                        <p>{formaterDate(ele.first_air_date)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {showBtns && (
                <div className="btns">
                  <Button
                    disabled={currentpage > 1 ? false : true}
                    className="prev"
                    onClick={prevpage}
                  >
                    Back
                  </Button>

                  <div className="current-page">{`page | ${currentpage}`}</div>

                  <Button
                    disabled={currentpage > totalpages ? true : false}
                    className="next"
                    onClick={nextpage}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default HomeCardMovies;
