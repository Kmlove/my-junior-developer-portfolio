import React, { useEffect, useState } from 'react'
import "../css/blogStyles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function Blog() {
  const [ mediumData, setMediumData ] = useState()

  useEffect(() => {
    fetch('https://medium-blog-api.onrender.com/medium_info')
    .then(res => res.json())
    .then(data => {
      setMediumData(data)
    })
    .catch(err => console.error(err))
  }, [])

  if(mediumData === undefined){
    return <h3>Loading...</h3>
  }

  return (
    <div className='odd'>
      <div id="blogSection" className='contain' style={{paddingBottom: "20px"}}>
        <h2>My Blog Posts</h2>
        <div id="blog-header">
          <img src={mediumData.profile_img} alt="Kim's profile pic from Medium" />
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
              <p>{mediumData.dates[0]}</p>
              <p id="blog-title">{mediumData.blog_titles[0]}</p>
              <p>{mediumData.descriptions[0]}</p>
              <a href={mediumData.links_to_blogs[0]} target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src={mediumData.blog_img_srcs[0]} alit={`Thumbnail img for ${mediumData.blog_titles[0]} blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>{mediumData.dates[1]}</p>
              <p id="blog-title">{mediumData.blog_titles[1]}</p>
              <p>{mediumData.descriptions[1]}</p>
              <a href={mediumData.links_to_blogs[1]} target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src={mediumData.blog_img_srcs[1]} alit={`Thumbnail img for ${mediumData.blog_titles[1]} blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>{mediumData.dates[2]}</p>
              <p id="blog-title">{mediumData.blog_titles[2]}</p>
              <p>{mediumData.descriptions[2]}</p>
              <a href={mediumData.links_to_blogs[2]} target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src={mediumData.blog_img_srcs[2]} alit={`Thumbnail img for ${mediumData.blog_titles[2]} blog`}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog