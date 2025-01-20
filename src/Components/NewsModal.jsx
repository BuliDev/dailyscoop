import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

const NewsModal = () => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <span className='close-button'>
          <i className='fa-solid fa-xmark'></i>
        </span>
        <img src={demoImg} alt='Modal Image' className='modal-image' />
        <h2 className='modal-title'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
          ducimus.
        </h2>
        <p className='modal-source'>Source: The Guardian</p>
        <p className='modal-date'>Jan 20, 2025, 14:36pm</p>
        <p className='modal-content-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum
          sit, labore ex nihil molestiae reprehenderit, magnam deserunt officia
          animi aliquam, eius voluptatem! Distinctio a quibusdam illum odio est
          reiciendis aliquam iure recusandae nobis nulla?
        </p>
        <a href='#' className='read-more-link'>
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsModal
