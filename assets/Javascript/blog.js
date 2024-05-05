const toggleModeButton= document.querySelector('.toggleModeButton');
let isDarkMode = false;

function toggleMode() {
if (isDarkMode) {
  lightmode()
  isDarkMode=false
}
else {
  darkmode() 
  isDarkMode = true
}
}

function lightmode() {
  document.body.style.backgroundColor = "#fff"; // Change background color to white
  document.body.style.color = "#000"; // Change text color to black
  toggleModeButton.innerHTML = "&#127774";
}



function darkmode() {
  document.body.style.backgroundColor = "#000"; // Change background color to black
  document.body.style.color = "#fff"; // Change text color to white
  toggleModeButton.innerHTML = "&#127762"
}

toggleModeButton.addEventListener('click', toggleMode);
    
    
    // Array of blog post objects
    var blogPosts = [
        {
            title: "Blog Title 1",
            subtitle: "Title 1",
            description: "Description 1 goes here..."
        },
        {
            title: "Blog Title 2",
            subtitle: "Title 2",
            description: "Description 2 goes here..."
        }
        // Add more blog post objects as needed
    ];

    // Function to generate HTML for blog posts
    function generateBlogPosts() {
       const mainElement = document.getElementById("blog-posts");
        blogPosts.forEach(function(post) {
            const article = document.createElement("article");
            const title = document.createElement("h2");
            const subtitle = document.createElement("h3");
            const description = document.createElement("p");

            title.textContent = post.title;
            subtitle.textContent = post.subtitle;
            description.textContent = post.description;

            article.appendChild(title);
            article.appendChild(subtitle);
            article.appendChild(description);

            mainElement.appendChild(article);
        });
    }

    // Call the function to generate blog posts
    generateBlogPosts();
