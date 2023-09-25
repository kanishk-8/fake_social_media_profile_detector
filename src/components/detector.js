 function detectFakeAccount() {
    var username = document.getElementById("input").value;
    if (username) {
      // Send username to server for analysis
      // Receive response from server with fake score
      var fakeScore = Math.random(); // Simulate fake score from server
      var result = document.getElementById("result");
      if (fakeScore > 0.5) {
        result.innerHTML = "The account " + username + " is fake with a score of " + Math.round(fakeScore * 100) + "%.";
        result.style.color = "#ff0000";
      } else {
        result.innerHTML = "The account " + username + " is real with a score of " + Math.round((1 - fakeScore) * 100) + "%.";
        result.style.color = "#00ff00";
      }
    } else {
      alert("Please enter a username.");
    }
  }