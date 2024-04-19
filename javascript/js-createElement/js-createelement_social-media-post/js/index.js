console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newSocialMediaPost = document.createElement("section");
newSocialMediaPost.classList.add("post");

const newSocialmediaPost = document.createElement("p");
newSocialmediaPost.textContent = "Please like, share and subscribe :)";
newSocialmediaPost.classList.add("post__content");

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.textContent = "@username";
newSpan.classList.add("post__username");

const newButton = document.createElement("button");
newButton.textContent = "♥ Like";
newButton.classList.add("post__button");

newFooter.append(newSpan, newButton);
newSection.append(newSocialmediaPost, newFooter);

document.body.append(newSection);
