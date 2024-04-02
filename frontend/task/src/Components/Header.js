import React from 'react';
import item from '../Style/list.module.css';

export default function Header() {
  return (
    <>
      <div >
        <nav className="navbar " style={{ backgroundColor: "#662671" }} >
          <div class="container-fluid">
            <a class="navbar-brand" style={{ color: "white", fontSize: "26px", paddingLeft: "15px" }}>Digitalflake</a>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit" ><a href="/logout" style={{ textDecoration: "none" }}>Logout</a></button>
            </form>
          </div>
        </nav>
      </div>
      <nav class="navbar dark">
        <ul class="navbar-nav" style={{
          backgroundColor: "#F4F4F4", width: "350px", height: "650px", listStyle: "none",
          padding: "0"
        }}  >
          <li class="nav-item active" className={item.item}>
            <a class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item active" className={item.item}>
            <a class="nav-link" href="/category">Category</a>
          </li>
          <li class="nav-item active" className={item.item}>
            <a class="nav-link" href="/product">Product</a>
          </li>
        </ul>
      </nav>
    </>
  )
}