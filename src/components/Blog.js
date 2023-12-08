import React, { useEffect, useState } from 'react'
import "../css/blogStyles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

function Blog() {


  // const blogsToDisplay = firstThreeBlogs.map((blog, index) => {
  //   // Create a shorten description from the long blog descritpon
  //   const indexOfp = blog.description.indexOf("<p>")
  //   const start = indexOfp + 3
  //   const end = start + 150
  //   const shortDescription = blog.description.slice(start, end) + '...'

  //   // Reformat the date
  //   const blogDateTime = new Date(blog.pubDate);
  //   const month = months[blogDateTime.getMonth()];
  //   const day = blogDateTime.getDate();
  //   const year = blogDateTime.getFullYear();
  //   const formattedDate = month + " " + day + "," + year;

  //   return (
  //     <div key={index} className='blog'>
  //       <div id="blog-text">
  //         <p>{formattedDate}</p>
  //         <p id="blog-title">{blog.title}</p>
  //         <p>{shortDescription}</p>
  //         <a href={blog.link} target='_blank' rel="noreferrer">Read more...</a>
  //       </div>
  //       <div id="blog-image">
  //         <img src={blog.thumbnail} alit={`Thumbnail img for ${blog.title} blog`}/>
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div className='odd'>
      <div id="blogSection" className='contain' style={{paddingBottom: "20px"}}>
        <h2>My Blog Posts</h2>
        <div id="blog-header">
          <img src={''} alt="Kim's profile pic from Medium" />
          <h4>Kimberly Love</h4>
          <p>Check out my latest 3 blogs below! If you are interested in seeing a complete list of all my blogs, you go to my Medium page here  
            <span id="blog-medium"><a href='https://medium.com/@kimberlymlove15' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faMedium} size="xl" title="Go to Kim's blog on Medium"/>
            </a></span>
          </p>
        </div>
        <div id="blogs-container">
          <div className='blog'>
            <div id="blog-text">
              <p>Oct 13</p>
              <p id="blog-title">SQLAlchemy Relationship Status: It's Complicated - Backref vs. Back_populates</p>
              <p>As a new programmer, the use of libraries can be intimidating, and when it comes to managing databases in your Python projects, the...</p>
              <a href="https://medium.com/@kimberlymlove15/sqlalchemy-relationship-status-its-complicated-backref-vs-back-populates-9eaf07335a13" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='https://miro.medium.com/v2/format:webp/0*JGmWuZQn8JctfqOf.png' alit={`Thumbnail img for SQLAlchemy Relationship Status blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>Sept 21</p>
              <p id="blog-title">Lambda Me This…</p>
              <p>If you're new to programming like me you'll probably find that as you continue to dive deeper into any language and look at Stack Overflow and other resources to try to help you solve problems, you discover...</p>
              <a href="https://medium.com/@kimberlymlove15/lambda-me-this-270807e841f8" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='https://miro.medium.com/v2/format:webp/1*58IXFkGTS2WZK_XIjeR7pg.png' alit={`Thumbnail img for Lambda Me This blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>Sept 5</p>
              <p id="blog-title">Destructuring Destructured</p>
              <p>When you see a word like destructuring it can be very intimidating, especially when you’re first starting out in the coding world. However, once you get the hang of this JavaScript shorthand it can save you...</p>
              <a href="https://medium.com/@kimberlymlove15/destructuring-destructured-bc724e9a7c6" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='https://miro.medium.com/v2/format:webp/1*NVF8x6T_t9939oZUI4oswQ.jpeg' alit={`Thumbnail img for Destructuring Destructured blog`}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog