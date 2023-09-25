function reportFakeAccount() {
     var username = prompt("Enter the username of the fake account:");
     var reason = prompt("Enter the reason for reporting the fake account:");
     if (username && reason) {
       alert("Thank you for reporting the fake account. We will review your report and take appropriate action.");
       // Send username and reason to server for verification
     } else {
       alert("Please enter both username and reason for reporting the fake account.");
     }
   }