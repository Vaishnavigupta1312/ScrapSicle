import React from 'react'
import Wood from './Pages/Wood'
import Plastics from './Pages/Plastics'
import Wire from './Pages/Wire'
import Glass from './Pages/Glass'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div>
      <div class="container mb-5">
          <div id="products" class="row">
              
            <div class="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div class="card product-item">
                  <i class="bi bi-heart-fill position-absolute liked"></i>
                   <i class="bi bi-heart position-absolute like"></i>
                  <img src="https://www.momjunction.com/wp-content/uploads/2021/09/12-1.jpg" onclick="goToProductDetails()" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Plastic Art</h5>
                    <div class="text-center">
                        <Link class="btn btn-dark w-100"  role="button" to='/plastic'> Details</Link>
                      </div>
                  </div>
                </div>
            </div>            
            <div class="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div class="card product-item">
                  <i class="bi bi-heart-fill position-absolute liked"></i>
                   <i class="bi bi-heart position-absolute like"></i>
                  <img src="https://cdn.yehaindia.com/wp-content/uploads/2021/02/wood-craft-in-India.jpg" onclick="goToProductDetails()" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Woodern Art</h5>

                    <div class="text-center">
                        <Link class="btn btn-dark w-100"  role="button" to="/wood"> Details</Link>
                      </div>
                  </div>
                </div>
            </div>            
            <div class="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div class="card product-item">
                  <i class="bi bi-heart-fill position-absolute liked"></i>
                   <i class="bi bi-heart position-absolute like"></i>
                  <img src="https://origami.plus/images/models/pyramid-pixels/pyramid-pixels.en.960x540.jpg" onclick="goToProductDetails()" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Wire Art</h5>

                    <div class="text-center">
                        <Link class="btn btn-dark w-100"  role="button" to="/wire"> Details</Link>
                      </div>
                  </div>
                </div>
            </div>            
            <div class="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div class="card product-item">
                  <i class="bi bi-heart-fill position-absolute liked"></i>
                   <i class="bi bi-heart position-absolute like"></i>
                  <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/08/colorado-glass-works-stained-glass-art-12.jpg" onclick="goToProductDetails()" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Glass</h5>

                    <div class="text-center">
                        <Link class="btn btn-dark w-100" to='/glass' role="button"> Details</Link>
                      </div>
                  </div>
                </div>
            </div>            
          </div>
    </div>
    </div>
  )
}

export default Card
