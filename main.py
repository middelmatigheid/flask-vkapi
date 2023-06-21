import requests
from datetime import datetime
from flask import Flask, render_template


# VK API access token
access_token = None


# Function to find out position of photo's size with the highest resolution
def maxsize(sizes):
    maxi = 0
    for i in range(len(sizes)):
        if sizes[i]['height'] > sizes[maxi]['height']:
            maxi = i
    return maxi


# Receiving first 100 posts because it's max possible amount
posts = requests.get(f'https://api.vk.com/method/wall.get?domain=gorephotographer&access_token={access_token}&count=100&v=5.131').json()['response']['items']


# Receiving all remaining posts and appending them to posts
posts_request_offset = 1
posts_request = requests.get(f'https://api.vk.com/method/wall.get?domain=gorephotographer&access_token={access_token}&offset={posts_request_offset * 100}&count=100&v=5.131').json()['response']['items']
while len(posts_request) > 0:
    for post in posts_request:
        posts.append(post)
    posts_request_offset += 1
    posts_request = requests.get(f'https://api.vk.com/method/wall.get?domain=gorephotographer&access_token={access_token}&offset={posts_request_offset * 100}&count=100&v=5.131').json()['response']['items']


# Adding maxsize key to each post to storage position of the highest resolution size of photo
for post in posts:
    for image in post['attachments']:
        image['maxsize'] = maxsize(image['photo']['sizes'])


# Flask app
app = Flask(__name__)


# Main page
@app.route('/')
def index():
    return render_template('main.html', posts=posts[:10], datetime=datetime.fromtimestamp, str=str, len=len)


# Server route to send data to the js
@app.route('/posts/<int:posts_offset>')
def post(posts_offset):
    return [render_template('posts.html', posts=posts[(posts_offset - 1) * 10:posts_offset * 10], datetime=datetime.fromtimestamp, str=str, len=len)]


if __name__ == '__main__':
    app.run(debug=True)

# middelmatigheid 21-06-2023
