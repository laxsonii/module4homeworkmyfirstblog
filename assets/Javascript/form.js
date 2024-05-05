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

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('button[type="submit"]');
  const userNameInput = document.querySelector('#username');
  const titleInput = document.querySelector('#title');
  const contentInput = document.querySelector('#content');
  

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = userNameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    const user = {
      username: username,
      title: title,
      content: content, 
    };

    localStorage.setItem('user', JSON.stringify(user));

    document.getElementById('msg').textContent = "Blog post submitted successfully!";
    document.location.replace("blog.html")
  });
});

