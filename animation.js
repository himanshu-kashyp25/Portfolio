// Set the target values for each progress bar
var targetValues = {
  "progress-bar": 70,    // Java
  "progress-bar1": 40,   // JavaScript
  "progress-bar2": 95,   // HTML & CSS
  "progress-bar3": 30    // DSA
};

// Function to animate the progress bars
function animateProgressBars() {
  for (var id in targetValues) {
    var progressBar = document.getElementById(id);
    animateProgressBar(progressBar, targetValues[id]);
  }
}

// Function to animate a specific progress bar
function animateProgressBar(progressBar, targetValue) {
  var width = 0;
  var interval = setInterval(function() {
    if (width >= targetValue) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 10); // Adjust the speed of animation by changing the interval (milliseconds)
}

// Call the function to animate the progress bars when the page loads
window.onload = animateProgressBars;

// search.js

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  var searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  
  // Define mapping of search terms to URLs
  var searchMap = {
    "home": "index.html", 
    "about": "about.html",
    "contact": "contact.html",// Replace with actual URLs of your pages
    // Add more search terms and their corresponding URLs as needed
  };

  // Check if the search term exists in the search map
  if (searchInput in searchMap) {
    var url = searchMap[searchInput];
    // Redirect to the corresponding URL
    window.location.href = url;
  } else {
    alert("No matching page found for the search term: " + searchInput);
  }
});
