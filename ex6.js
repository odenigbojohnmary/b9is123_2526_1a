//This should have a function that takes a GitHub username 
//and outputs their repo with the most forks.

//https://api.github.com/

// I use an async function here because we are making a network request to the GitHub API, which takes time.
//This makes it more efficient.
async function fetchMostForkedRepo(username) {
  //I use a try catch block here to handle any errors that may occur during the network request.
  try {
    // Fetch the user's public repositories from the GitHub API
    let response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch repos for ${username}: ${response.statusText}`);
    }
    
    // Parse the JSON response
    let repos = await response.json();
    
    // Check if the user has any public repositories
    if (!repos || repos.length === 0) {
      return `User ${username} has no public repositories.`;
    }
    
    // Use a standard loop to find the repository with the highest forks_count
    let mostForked = repos[0];
    for (let currentRepo of repos) {
    // If we find a repo that has MORE forks than our current 'mostForked', 
      if (currentRepo.forks_count > mostForked.forks_count) {
        //we update 'mostForked' to be this new repository.
        mostForked = currentRepo;
      }
    }
    
    // Output the most forked repository's name, number of forks, and URL
    return `Most forked repo for ${username} is '${mostForked.name}' with ${mostForked.forks_count} forks. URL: ${mostForked.html_url}`;
  } catch (error) {
    // Return the error message if something goes wrong
    return `Error: ${error.message}`;
  }
}

// // UI handler — called from the page button
// let runEx6 = async () => {
//   let username = document.getElementById("ex6input").value.trim();
//   let output   = document.getElementById("ex6output");

//   if (!username) {
//     output.textContent = "Please enter a GitHub username.";
//     return;
//   }

//   output.textContent = "Fetching…";
//   output.textContent = await fetchMostForkedRepo(username);
// };
