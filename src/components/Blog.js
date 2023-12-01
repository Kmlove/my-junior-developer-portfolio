import React, { useEffect, useState } from 'react'
import "../css/blogStyles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function Blog() {
  const [ blogs, setBlogs ] = useState([])
  const [ feed, setFeed ] = useState([])
  const firstThreeBlogs = blogs.slice(0,3)

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kimberlymlove15')
    .then(res => res.json())
    .then(data => {
      setBlogs(data.items)
      setFeed(data.feed)
    })
    .catch(err => console.error(err))
  }, [])

  const blogsToDisplay = firstThreeBlogs.map((blog, index) => {
    // Create a shorten description from the long blog descritpon
    const indexOfp = blog.description.indexOf("<p>")
    const start = indexOfp + 3
    const end = start + 150
    const shortDescription = blog.description.slice(start, end) + '...'

    // Reformat the date
    const blogDateTime = new Date(blog.pubDate);
    const month = months[blogDateTime.getMonth()];
    const day = blogDateTime.getDate();
    const year = blogDateTime.getFullYear();
    const formattedDate = month + " " + day + "," + year;

    return (
      <div key={index} className='blog'>
        <div id="blog-text">
          <p>{formattedDate}</p>
          <p id="blog-title">{blog.title}</p>
          <p>{shortDescription}</p>
          <a href={blog.link} target='_blank' rel="noreferrer">Read more...</a>
        </div>
        <div id="blog-image">
          <img src={blog.thumbnail}/>
        </div>
      </div>
    )
  })

  return (
    <div id="blogSection" className='odd' style={{paddingBottom: "10px"}}>
      <h2>My Blog Posts</h2>
      <div id="blog-header">
        <img src={feed.image} alt="Kim's profile pic from Medium" />
        <h4>Kimberly Love</h4>
        <p>Check out my latest 3 blogs below! If you are interested in seeing a complete list of all my blogs, you go to my Medium page here  
          <span id="blog-medium"><a href={feed.link}target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faMedium} size="xl" title="Go to Kim's blog on Medium"/>
          </a></span>
        </p>
      </div>
      <div id="blogs-container">
        {blogsToDisplay}
      </div>
    </div>
  )
}

export default Blog