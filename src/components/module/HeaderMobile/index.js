import React, { Component } from "react";

export class HeaderMobile extends Component {
  render() {
    return (
      <>
        <div id="menu" class="menu-mobile">
          <div class="warped-menu display-flex is-vertically-centered border-gray border-rounded2 margin-y-1">
            <img
              class="margin-left-1"
              src="/assets/images/bx_bx-search.png"
              height="20px"
              width="20px"
              alt="search"
            />
            <input class="input-form no-border" type="text" placeholder="Search . . ." />
          </div>
          <hr class="hr" />
          <select class="select font-size-6 bg-none" name="location" id="loc">
            <option value="#">Location</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bogor">Bogor</option>
            <option value="Bandung">Bandung</option>
            <option value="Yogyakarta">Yogyakarta</option>
          </select>
          <hr class="hr" />
          <a class="text-decoration-none margin-y-1 text-bold" href="">
            Movies
          </a>
          <hr class="hr" />
          <a class="text-decoration-none margin-y-1 text-bold" href="">
            Cinemas
          </a>
          <hr class="hr" />
          <a class="text-decoration-none margin-y-1 text-bold" href="">
            Buy Tiket
          </a>
          <hr class="hr" />
          <span class="footer-nav">© 2020 Tickitz. All Rights Reserved.</span>
        </div>
        <div id="shadow-menu" class="none-shadow-menu" onclick="myFunction()"></div>
      </>
    );
  }
}

export default HeaderMobile;
