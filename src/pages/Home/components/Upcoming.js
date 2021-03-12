import React, { Component } from "react";

export class Upcoming extends Component {
  render() {
    return (
      <div className="display-flex margin-x-5 flex-direction-col sm-container-1">
        <div className="nav-showing display-flex flex-content-between is-vertically-centered">
          <div>
            <p className="color-black">Upcoming Movies</p>
          </div>
          <div>
            <a href="#">view all</a>
          </div>
        </div>
        <div className="month-movies margin-top-2">
          <input type="submit" className="btn-month-movies selected" value="September" />
          <input type="submit" className="btn-month-movies" value="October" />
          <input type="submit" className="btn-month-movies" value="November" />
          <input type="submit" className="btn-month-movies" value="December" />
          <input type="submit" className="btn-month-movies" value="January" />
          <input type="submit" className="btn-month-movies" value="February" />
          <input type="submit" className="btn-month-movies" value="March" />
          <input type="submit" className="btn-month-movies" value="April" />
          <input type="submit" className="btn-month-movies" value="May" />
          <input type="submit" className="btn-month-movies" value="June" />
          <input type="submit" className="btn-month-movies" value="July" />
          <input type="submit" className="btn-month-movies" value="Agust" />
        </div>
        <div className="element-showing display-flex flex-direction-row  margin-y-3 flex-content-between sm-overflow">
          <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
            <img className="padding-y-1" src="./assets/images/blackwindow.png" alt="" />
            <p className="title-movies">Black Widow</p>
            <p className="cat-movies">Action, Adventure, Sci-Fi</p>
            <input className="btn-detail-movies" type="submit" value="Detail" />
          </div>
          <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
            <img className="padding-y-1" src="./assets/images/witches.png" alt="" />
            <p className="title-movies">The Witches</p>
            <p className="cat-movies">Adventure, Comedy, Family</p>
            <input className="btn-detail-movies" type="submit" value="Detail" />
          </div>
          <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
            <img className="padding-y-1" src="./assets/images/tenet.png" alt="" />
            <p className="title-movies">Tenet</p>
            <p className="cat-movies">Action, Sci-Fi</p>
            <input className="btn-detail-movies" type="submit" value="Detail" />
          </div>
          <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
            <img className="padding-y-1" src="./assets/images/blackwindow.png" alt="" />
            <p className="title-movies">Black Widow</p>
            <p className="cat-movies">Action, Adventure, Sci-Fi</p>
            <input className="btn-detail-movies" type="submit" value="Detail" />
          </div>
          <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
            <img className="padding-y-1" src="./assets/images/witches.png" alt="" />
            <p className="title-movies">The Witches</p>
            <p className="cat-movies">Adventure, Comedy, Family</p>
            <input className="btn-detail-movies" type="submit" value="Detail" />
          </div>
        </div>
      </div>
    );
  }
}

export default Upcoming;
