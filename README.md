# Kim's Software Developer Project Portfolio

Welcome to my software developer portfolio page! Here you'll be able to:
 - Learn a little more about me in my About Me section and view a copy of my resume.
 - Explore three of my top projects in the Project section, giving quick access to GitHub repos and live sites.
 - Check out my 3 most recent blogs on Medium in the Blogs section.
 - Easily contact me from the Contact Me section via email or a contact form.

## Live Site
https://kimlove.onrender.com

## Technologies
React, JavaScript, CSS, Sass, Python, Flask

## To Run In Development Environment
1. Fork and clone the repo
2. ```npm install``` and ```pipenv install```
3. ```pipenv shell```
4. cd into server and run ```python app.py``` to start server
5. From the root folder run ```npm start```

## Branches
- server-for-blog
- hardcoded-blog-section
- rss2json-blog-section
- deployment

## server-for-blog Branch
On the server-to-blog branch I have built a custom API in order to get the data that is displayed in the blog section of the portfolio. The API code lives in the server folder. This API scrapes my Medium account's profile page and returns specific data which is then displayed. The API is hosted on Render, so it can sometimes take 1-2 minutes to spin up and return the data. The benefit of using this method is that it is dynamic, and whenever I write a new blog, it will automatically update the information displayed in the blog section of my portfolio. The downfall is method is that if the API is inactive, it will spin down, causing a delay in returning the blog information when a new request is made to the API. I use python and Flask to build this API.

## hardcoded-blog Branch
On the hardcoded-blog branch I have hardcoded the information for my latest 3 blogs. The benefit of this method is that there is no delay in displaying the information about the blogs. The downfall to this method is that it is not dynamic, so anytime I create a new blog I need to go into my code for manually update it with new information. 

## rss2json-blog-section Branch
On the rss2json-blog-section branch, I use a rss2json API to retrieve the data from my Medium profile page. The benefit of using this method is that it is dynamic, and whenever I write a new blog, it will automatically update the information displayed in the blog section of my portfolio. The downfall is that the API very frequently has errors and doesn't return any information, so it is not reliable. 

## deployment Branch
This is the branch that is deployed on Render. 
