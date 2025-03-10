window.onload = function () {
  // Hide the loading screen after a set timeout (simulating loading)
  document.getElementById("mainContent").style.opacity = 0;
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none"; // Hide loading screen
    document.getElementById("mainContent").style.opacity = 1; // Show main content
  }, 1000); // 3 seconds for demo, adjust as needed
};
