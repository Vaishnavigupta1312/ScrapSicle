import React, { useEffect, useState } from 'react'

const Glasscard = () => {
    const [data, setdata] = useState([]);
    const getdata = () => {
        fetch("Glassdata.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((mydata) => {
            setdata(mydata);
          });
      };
      useEffect(() => {
        getdata();
      }, []);
  return (
    <div>
        <div class="container mb-5">
          <div id="products" class="row">
       
        {data &&
        data.map((val) => {
          return (
            <div class="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div class="card product-item">
                  <i class="bi bi-heart-fill position-absolute liked"></i>
                   <i class="bi bi-heart position-absolute like"></i>
                  <img src={val.images} onclick="goToProductDetails()" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <div class="text-center">
                        <a class="btn btn-dark w-100"  role="button" to='/plastic'> {val.Ratings}</a>
                      </div>
                  </div>
                </div>
            </div>
          );
        })}
        </div>
        </div>
      
    </div>
  )
}

export default Glasscard;
