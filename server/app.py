from bs4 import BeautifulSoup
import requests
from flask import Flask, make_response, jsonify
from flask_cors import CORS

# Instantiate app, set attributes
app = Flask(__name__)
app.json.compact = False
# UPDATE: app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K' 

# Instantiate CORS
CORS(app)

# Views go here!
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/medium_info')
def medium_info():
    #Scrape medium's website at my medium url
    url = "https://medium.com/@kimberlymlove15"
    response = requests.get(url)

    soup = BeautifulSoup(response.text, "html.parser")

    # Get dates associated with blogs
    dates = []
    for p in soup.select('p.be.b.bf.z.dn'):
        for span in p.select('span'):
            dates.append(span.contents[0])
    dates_wo_About = dates[1:]

    # Get blog titles and author name
    h2 = [h2.contents[0] for h2 in soup.select('h2')]
    blog_titles = h2[0:len(h2)-1]
    author_name = h2[len(h2)-1].contents[0]

    # Get blog descriptions
    descriptions = [p.contents[0] for p in soup.select('p.lz.b.fv.fy')]

    # Get profile img and blog image src's
    profile_img = soup.select('img.l.dh.bx.if.ig.fi')[0].get('src')

    images_without_class = [img for img in soup.select('img') if img.get('class') == []]
    blog_images = images_without_class[1::2]
    blog_srcs = []
    for img in blog_images:
        resize_src = img.get('src')
        new_src = resize_src.replace('/resize:fill:160:112/', '/')
        blog_srcs.append(new_src)

    # combine all info into a single dictionary to return
    medium_info = {
        "profile_img": profile_img,
        "author_name": author_name,
        "dates": dates_wo_About,
        "blog_titles": blog_titles,
        "descriptions": descriptions,
        "blog_srcs": blog_srcs
    }

    return make_response(medium_info, 200)

if __name__ == '__main__':
    app.run(port=5555, debug=True) 