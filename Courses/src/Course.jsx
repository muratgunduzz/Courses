import React from 'react'
import './css/Course.css'

function Course({course}) {

    const {id,title,description,price,image} = course;

  return (
    <div class="card">
  <div class="image-container">
    <img src={image} alt={title} />
  </div>
  <div class="overlay"></div>
  <div class="content-container">
    <div class="card-content">
      <div class="course-details">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>{price} TL</p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Course