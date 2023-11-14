import React from 'react'
import Wirecard from './Wirecard'

const Wire = () => {
  return (
    <>
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide mb-5 car " data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="https://media.licdn.com/dms/image/C4D12AQF3n8rqMdIMvQ/article-cover_image-shrink_720_1280/0/1520247274822?e=2147483647&v=beta&t=-4T4LhcbB3uDcl1j1_mutDUqTqin8RMo_4MF8kNchow" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://ksr-ugc.imgix.net/assets/035/504/213/38822b51510ac57b2229f419b914077d_original.jpg?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1636337769&auto=format&frame=1&q=92&s=6e8968ce34c7fa3653cb93306b129a77
" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://media.lostateminor.com/wp-content/uploads/2022/05/How-to-DIY-Wire-Pendants.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
      
    </div>
    <div>
      <Wirecard/>
    </div>
    </>
  )
}

export default Wire
