/* Creating correct grid for images according to amount of them */
function imagesGrid(posts) {
    for (let i = 0; i < posts.length; i++) {
        const images = posts[i].querySelectorAll('.post-image');
        if (images.length == 1) {
            posts[i].querySelector('.post-images').style.grid = '400px / 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 2';
        } else if (images.length == 2) {
            posts[i].querySelector('.post-images').style.gridTemplate = '400px / 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 2';
            images[1].style.gridArea = '1 / 2 / 2 / 3';
        } else if (images.length == 3) {
            posts[i].querySelector('.post-images').style.gridTemplate = '200px 200px / 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 3 / 2';
            images[1].style.gridArea = '1 / 2 / 2 / 3';
            images[2].style.gridArea = '2 / 2 / 3 / 3';
        } else if (images.length == 4) {
            posts[i].querySelector('.post-images').style.gridTemplate = '200px 200px / 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 2';
            images[1].style.gridArea = '1 / 2 / 2 / 3';
            images[2].style.gridArea = '2 / 1 / 3 / 2';
            images[3].style.gridArea = '2 / 2 / 3 / 3';
        } else if (images.length == 5) {
            posts[i].querySelector('.post-images').style.gridTemplate = '400px 100px / 1fr 1fr 1fr 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 4';
            images[1].style.gridArea = '1 / 4 / 2 / 7';
            images[2].style.gridArea = '2 / 1 / 3 / 3';
            images[3].style.gridArea = '2 / 3 / 3 / 5';
            images[4].style.gridArea = '2 / 5 / 3 / 7';
        } else if (images.length == 6) {
            posts[i].querySelector('.post-images').style.gridTemplate = '400px 100px / 1fr 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 3';
            images[1].style.gridArea = '1 / 3 / 2 / 5';
            images[2].style.gridArea = '2 / 1 / 3 / 2';
            images[3].style.gridArea = '2 / 2 / 3 / 3';
            images[4].style.gridArea = '2 / 3 / 3 / 4';
            images[5].style.gridArea = '2 / 4 / 3 / 5';
        } else if (images.length == 7) {
            posts[i].querySelector('.post-images').style.gridTemplate = '200px 200px 100px / 1fr 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 3 / 3';
            images[1].style.gridArea = '1 / 3 / 2 / 5';
            images[2].style.gridArea = '2 / 3 / 3 / 5';
            images[3].style.gridArea = '3 / 1 / 4 / 2';
            images[4].style.gridArea = '3 / 2 / 4 / 3';
            images[5].style.gridArea = '3 / 3 / 4 / 4';
            images[6].style.gridArea = '3 / 4 / 4 / 5';
        } else if (images.length == 8) {
            posts[i].querySelector('.post-images').style.gridTemplate = '200px 200px 100px / 1fr 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 3';
            images[1].style.gridArea = '1 / 3 / 2 / 5';
            images[2].style.gridArea = '2 / 1 / 3 / 3';
            images[3].style.gridArea = '2 / 3 / 3 / 5';
            images[4].style.gridArea = '3 / 1 / 4 / 2';
            images[5].style.gridArea = '3 / 2 / 4 / 3';
            images[6].style.gridArea = '3 / 3 / 4 / 4';
            images[7].style.gridArea = '3 / 4 / 4 / 5';
        } else if (images.length == 9) {
            posts[i].querySelector('.post-images').style.gridTemplate = '163px 164px 163px / 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 2';
            images[1].style.gridArea = '1 / 2 / 2 / 3';
            images[2].style.gridArea = '1 / 3 / 2 / 4';
            images[3].style.gridArea = '2 / 1 / 3 / 2';
            images[4].style.gridArea = '2 / 2 / 3 / 3';
            images[5].style.gridArea = '2 / 3 / 3 / 4';
            images[6].style.gridArea = '3 / 1 / 4 / 2';
            images[7].style.gridArea = '3 / 2 / 4 / 3';
            images[8].style.gridArea = '3 / 3 / 4 / 4';
        } else {
            posts[i].querySelector('.post-images').style.gridTemplate = '400px 100px / 1fr 1fr 1fr 1fr';
            images[0].style.gridArea = '1 / 1 / 2 / 3';
            images[1].style.gridArea = '1 / 3 / 2 / 5';
            images[2].style.gridArea = '2 / 1 / 3 / 2';
            images[3].style.gridArea = '2 / 2 / 3 / 3';
            images[4].style.gridArea = '2 / 3 / 3 / 4';

            for (let l = 5; l < images.length; l++) {
                images[l].style.display = 'none';
            }

            let postImageMore = document.createElement('div');
            postImageMore.addEventListener('click', function() {
                imageNum = 6;
                createPostActive(posts[i], images, imageNum);
            });

            postImageMore.classList.add('post-image-more');
            posts[i].querySelector('.post-images').appendChild(postImageMore);

            let postImageMoreBg = document.createElement('div');
            postImageMoreBg.classList.add('post-image-more-bg');
            postImageMoreBg.style.background = 'url(' + images[5].src + ')';
            postImageMoreBg.style.backgroundSize = 'cover';
            postImageMore.appendChild(postImageMoreBg);

            let postImageMoreDots = document.createElement('div');
            postImageMoreDots.classList.add('post-image-more-dots');
            postImageMore.appendChild(postImageMoreDots);

            for (let j = 0; j < 3; j++) {
                let postImageMoreDot = document.createElement('div');
                postImageMoreDot.classList.add('post-image-more-dot');

                let postImageMoreDotImage = document.createElement('img');
                postImageMoreDotImage.src = '../static/images/dot.png';
                postImageMoreDot.appendChild(postImageMoreDotImage);

                let postImageMoreDotActiveImage = document.createElement('img');
                postImageMoreDotActiveImage.classList.add('active');
                postImageMoreDotActiveImage.src = '../static/images/dot-active.png';
                postImageMoreDot.appendChild(postImageMoreDotActiveImage);
                postImageMoreDots.appendChild(postImageMoreDot);
            }
        };
    };
}

/* Creating correct buttons to prevent wrong value of transform */
function checkButtons(imageNum, imagesLength, post) {
	let postActiveButtonPrev = post.querySelector('.post-active-button-prev');
	let postActiveButtonNext = post.querySelector('.post-active-button-next');
	if (imagesLength == 1) {
		return false;
	} else if (imageNum == 0) {
		postActiveButtonPrev.style.opacity = 0;
		setTimeout(function() {
			postActiveButtonPrev.style.display = 'none';
		}, 100);
	} else if (imageNum == imagesLength - 1) {
		postActiveButtonNext.style.opacity = 0;
		setTimeout(function() {
			postActiveButtonNext.style.display = 'none';
		}, 100);
	} else if (postActiveButtonPrev.style.display == 'none') {
		postActiveButtonPrev.style.opacity = 0;
		postActiveButtonPrev.style.display = 'block';
		setTimeout(function() {
			postActiveButtonPrev.style.opacity = 1;
		}, 100);
	} else if (postActiveButtonNext.style.display == 'none') {
		postActiveButtonNext.style.opacity = 0;
		postActiveButtonNext.style.display = 'block';
		setTimeout(function() {
			postActiveButtonNext.style.opacity = 1;
		}, 100);
	}
};

/* Creating active post to see images when they are clicked */
function createPostActive(post, images, imageNum) {
	let postActive = document.createElement('div');
	postActive.classList.add('post-active');
	post.appendChild(postActive);

	let postActiveBg = document.createElement('div');
	postActiveBg.classList.add('post-active-bg');
	postActive.appendChild(postActiveBg);

	let postActiveButtons = document.createElement('div');
	postActiveButtons.classList.add('post-active-buttons');
	postActive.appendChild(postActiveButtons);
	let postActiveInner = document.createElement('div');
	postActiveInner.classList.add('post-active-inner');
	postActiveButtons.appendChild(postActiveInner);
	for (const buttonName of ['prev', 'exit', 'next']) {
		let postActiveButtonImage = document.createElement('img');
		postActiveButtonImage.src = '../static/images/' + buttonName + '.png';
		let postActiveButtonImageActive = document.createElement('img');
		postActiveButtonImageActive.src = '../static/images/' + buttonName + '-active.png';
		postActiveButtonImageActive.classList.add('active');
		let postActiveButton = document.createElement('div');
		postActiveButton.classList.add('post-active-button-' + buttonName);
		if (buttonName == 'prev') {
			postActiveButton.addEventListener('click', function() {
				postActiveSlider.style.transform = 'translate(-' + (--imageNum * 100).toString() + 'vw)';
				checkButtons(imageNum, images.length, post);
			});
		} else if (buttonName == 'exit') {
			postActiveButton.addEventListener('click', function() {
				postActive.style.opacity = 0;
				setTimeout(function() {
					postActive.remove();
					return false;
				}, 100);
			});
		} else {
			postActiveButton.addEventListener('click', function() {
				postActiveSlider.style.transform = 'translate(-' + (++imageNum  * 100).toString() + 'vw)';
				checkButtons(imageNum, images.length, post);
			});
		};
		postActiveButton.appendChild(postActiveButtonImage);
		postActiveButton.appendChild(postActiveButtonImageActive);
		postActiveInner.appendChild(postActiveButton);
		if (((imageNum == 0) && buttonName == 'prev') && buttonName != 'next') {
			postActiveButton.style.display = 'none';
		};
		if (((imageNum == images.length - 1) && buttonName == 'next') && buttonName != 'prev') {
			postActiveButton.style.display = 'none';
		};
	};

	let postActiveSlider = document.createElement('div');
	postActiveSlider.classList.add('post-active-slider');
	postActive.appendChild(postActiveSlider);

	for (let j = 0; j < images.length; j++) {
		let image = document.createElement('img');
		image.src = images[j].src;
		let imageDiv = document.createElement('div');
		imageDiv.classList.add('post-active-image');
		imageDiv.id = 'post-active-image-' + j.toString();
		imageDiv.appendChild(image);
		postActiveSlider.appendChild(imageDiv);
	};

	postActive.style.opacity = 0;
	postActiveSlider.style.transform = 'translate(-' + (imageNum  * 100).toString() + 'vw)';
	setTimeout(function() {postActive.style.opacity = 1;}, 100);
};

/* Adding event listener to images */
function imagesClick(posts) {
    for (let i = 0; i < posts.length; i++) {
        let imageNum = null;
        let images = posts[i].querySelectorAll('.post-image');
        for (let j = 0; j < images.length; j++) {
            images[j].addEventListener('click', function() {
                imageNum = j;
                createPostActive(posts[i], images, imageNum);
            });
        };
    }
}

imagesGrid(document.querySelectorAll('.post'));
imagesClick(document.querySelectorAll('.post'));

/* Receiving data from server when user reaches bottom of the page */
posts_offset = 1;
window_height = null;
window.addEventListener('scroll', function() {
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (window_height == height) {
        return false;
    }
    if (height - window.scrollY < html.clientHeight * 2) {
        window_height = height;
        let server_url = 'http://127.0.0.1:5000/posts/' + (++posts_offset).toString();
        fetch(server_url)
        .then(res => res.json())
        .then(function(res) {
            document.querySelector('.posts').innerHTML += res[0];
            imagesGrid(Array.from(document.querySelectorAll('.post')).slice((posts_offset - 1) * 10, posts_offset * 10));
            imagesClick(document.querySelectorAll('.post'));
        })
    }
});