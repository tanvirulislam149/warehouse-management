import React from 'react'
import "./Description.css"

const Description = () => {
  return (
    <div className='desc-container'>
      <div>
        <h2 className='header'>
          At <span style={{ color: "#002266" }}>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers
        </h2>
        <hr
          className="mb-3"
          style={{
            height: "5px",
            color: "#002266",
            width: "100px",
            borderRadius: "5px",
          }}
        />
        <p className='header-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
        <p className='header-text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
      <div>
        <img className='w-100 mx-auto' src="https://i.ibb.co/5105R8y/about-1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Description