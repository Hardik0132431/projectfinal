import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import data from "./data";
function Seach(props) {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  console.warn(filter);
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-lable h4">Seacrh</label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a href={item.url} target="_blank">
                    Read More
                  </a>
                  <br />
                  <br />
                  <button type="button" class="btn btn-primary">
                    {item.tags}
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Seach;
