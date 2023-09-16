// Sample Data
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Will contain user posts
const userPosts = document.getElementById("user-posts")

// Loads in each posts
for (let i = 0; i < posts.length; i++) {
    userPosts.innerHTML += `
        <div class="post-container">
            <div class="author">
                <img class="avatar" src="${posts[i].avatar}" alt="vanghogh avatar">
                <div class="poster-details">
                    <h1 class="author-name">${posts[i].name}</h1>
                    <h2 class="author-location">${posts[i].location}</h2>
                </div>
            </div>
            <img class="post" src="${posts[i].post}" alt="">
            <div class="bottom">
                <div class="post-interactions-container">
                    <img class="like-button post-interactions" data-index="${i}" src="images/icon-heart.png" alt="heart-icon">
                    <img class="post-interactions" src="images/icon-comment.png" alt="comment-icon">
                    <img class="post-interactions" src="images/icon-dm.png" alt="dm-icon">
                </div>
                <h1 class="like-count">${posts[i].likes} likes</h1>
                <h2><span>${posts[i].username}</span>: ${posts[i].comment}</h2>
            </div>
        </div>
`}

// Attaching event listener to the heart icon
document.querySelectorAll('.like-button').forEach((btn) => {
    btn.addEventListener('click', function(event) {
        // Retrieve the post's index from the data-index attribute.
        const postIndex = event.target.getAttribute('data-index');
        // Add to the total likes
        posts[postIndex].likes++;
        // Update the likes in the DOM
        const likesCountElement = btn.parentElement.nextElementSibling;
        likesCountElement.textContent = `${posts[postIndex].likes} likes`;
    });
});