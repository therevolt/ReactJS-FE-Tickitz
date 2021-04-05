import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router";
import Swal from "sweetalert2";
import Footer from "../../../components/module/Footer";
import HeaderNew from "../../../components/module/Header";
import CardMovie from "../components/CardMovie";
require("dotenv").config();

export default function DeleteMovie() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const [data, setData] = useState(null);
  const [dataAPI, setDataAPI] = useState(null);
  const [page, setPage] = useState({ num: 1, limit: 12 });
  const [genre, setGenre] = useState("");
  const [menu, setMenu] = useState(null);
  const [load, setLoad] = useState(false);
  let query = useQuery();

  useEffect(() => {
    if (!data) {
      setLoad(true);
      setPage({ ...page, limit: query.get("limit") ? query.get("limit") : 12 });
      window.scrollTo(0, 0);
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/movies?page=${page.num}&limit=${page.limit}`)
        .then((result) => {
          setLoad(false);
          if (result.data.status) {
            if (query.get("title")) {
              const filteredData = result.data.data.result.filter((item) =>
                item.name.toLowerCase().includes(query.get("title").toLowerCase())
              );
              if (filteredData.length === 0) {
                Swal.fire("Data Not Found", "Try With Other Genre");
              } else {
                let i = result.data.data.max_page;
                let arrMenu = [];
                while (i >= 0) {
                  arrMenu.push(i);
                  i--;
                }
                setMenu(arrMenu);
                setData(filteredData);
                setDataAPI(result.data.data.result);
              }
            } else {
              let i = 1;
              let arrMenu = [];
              while (i <= result.data.data.max_page) {
                arrMenu.push(i);
                i++;
              }
              setMenu(arrMenu);
              setData(result.data.data.result);
              setDataAPI(result.data.data.result);
            }
          } else {
            alert(result.data.message);
          }
        });
    }
    // eslint-disable-next-line
  }, [page]);

  const handleRefreshData = () => setData(dataAPI);

  const lengthContent = (value) => {
    if (data) {
      return data.filter((item) => item.genre.toLowerCase().includes(value.toLowerCase())).length;
    }
  };

  const handleClick = (value) => {
    const filteredData = data.filter((item) => item.genre.includes(value));
    if (filteredData.length === 0) {
      Swal.fire("Data Not Found", "Try With Other Genre");
    } else {
      setData(filteredData);
    }
  };

  const handleSearchTitle = (value) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length === 0) {
      setGenre(null);
      Swal.fire("Data Not Found", "Try With Other Title");
      setData(dataAPI);
    } else {
      setData(filteredData);
      setGenre(null);
    }
  };

  const handleSearchInput = (e) => {
    if (e.code === "Enter" && genre) {
      const filteredData = data.filter((item) =>
        item.genre.toLowerCase().includes(genre.toLowerCase())
      );
      if (filteredData.length === 0) {
        setGenre(null);
        Swal.fire("Data Not Found", "Try With Other Genre");
        setData(dataAPI);
      } else {
        setData(filteredData);
        setGenre(null);
      }
    }
  };

  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  const handlePagination = (e) => {
    setPage(e.target.id);
    setData(null);
  };

  return (
    <div className="showInAnimation">
      <HeaderNew fireEvent={[setData, dataAPI, handleSearchTitle]} />
      <div className="bg-grey sm-transform-content">
        <div className="border-rounded2">
          <div className="px-md-5 py-md-5 mx-md-5 px-3 py-3 mx-0">
            <div className="dropdown my-3">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                onClick={handleRefreshData}
              >
                Filter By Genre
              </button>
              <ul className="dropdown-menu">
                <input
                  className="form-control mx-2 my-2 w-90"
                  id="genre"
                  type="text"
                  placeholder="Search.."
                  value={genre}
                  onChange={handleChange}
                  onKeyPress={handleSearchInput}
                />
                <li>
                  <span onClick={() => handleClick("Drama")}>Drama ({lengthContent("Drama")})</span>
                </li>
                <li>
                  <span onClick={() => handleClick("Cinema")}>
                    Cinema ({lengthContent("Cinema")})
                  </span>
                </li>
                <li>
                  <span onClick={() => handleClick("Romance")}>
                    Romance ({lengthContent("Romance")})
                  </span>
                </li>
                <li>
                  <span onClick={() => handleClick("Fantasy")}>
                    Fantasy ({lengthContent("Fantasy")})
                  </span>
                </li>
                <li>
                  <span onClick={() => handleClick("Adventure")}>
                    Adventure ({lengthContent("Adventure")})
                  </span>
                </li>
                <li>
                  <span onClick={() => handleClick("Action")}>
                    Action ({lengthContent("Action")})
                  </span>
                </li>
              </ul>
            </div>
            {load ? (
              <Skeleton height={200} count={4} />
            ) : (
              <div className="row row-cols-2 row-cols-md-4 g-4">
                {data &&
                  data.map((item, i) => {
                    return (
                      <CardMovie
                        title={item.name}
                        genre={item.genre}
                        img={
                          item.image
                            ? item.image
                            : "https://img.freepik.com/free-vector/vintage-movie-poster_23-2147593880.jpg"
                        }
                        id={item.id}
                        setData={setData}
                        key={i}
                      />
                    );
                  })}
              </div>
            )}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center my-4">
                <li className={page.num > 1 ? "page-item" : "page-item disabled"}>
                  <span
                    className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      page.num > 1 &&
                        setPage({
                          num: page.num - 1,
                          limit: query.get("limit") ? query.get("limit") : 12,
                        });
                      setData(null);
                    }}
                  >
                    Previous
                  </span>
                </li>
                {menu &&
                  menu.map((item, i) => {
                    return (
                      <li className={page.num === item ? "page-item active" : "page-item"} key={i}>
                        <span className="page-link" id={item} onClick={handlePagination}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                {menu && (
                  <li className={page.num < menu.length ? "page-item" : "page-item disabled"}>
                    <span
                      className="page-link"
                      onClick={(e) => {
                        e.preventDefault();
                        page.num < menu.length &&
                          setPage({
                            num: page.num + 1,
                            limit: query.get("limit") ? query.get("limit") : 12,
                          });
                        setData(null);
                      }}
                    >
                      Next
                    </span>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="margin-y-3 sm-container bg-white sm-transform-footer">
        <Footer />
      </div>
    </div>
  );
}
