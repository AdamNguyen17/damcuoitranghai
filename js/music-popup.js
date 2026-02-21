// Custom Music Popup Script

document.addEventListener("DOMContentLoaded", function() {
  // Show music popup after a slight delay for better user experience
  setTimeout(function() {
    showMusicPopup();
  }, 1500);
  
  // Add event listener for the music popup background
  document.getElementById('musicPopup').addEventListener('click', function(event) {
    if (event.target === this) {
      closeMusicPopup();
    }
  });
});

// Function to show the music popup
function showMusicPopup() {
  const popup = document.getElementById('musicPopup');
  if (popup) popup.style.display = 'flex';
  
  // Hide the default bii-player notification if it exists
  const defaultPlayer = document.querySelector('.bii-player');
  if (defaultPlayer) {
    defaultPlayer.classList.remove('show-sec'); 
  }
}

// Function to play music and close popup
function playMusic() {
  if (window.audioPlayer && window.audioPlayer.paused) {
    window.audioPlayer.play();
    if (document.getElementById("playerVolumeOff")) {
      document.getElementById("playerVolumeOff").style.display = "none";
    }
    if (document.getElementById("playerVolumeOn")) {
      document.getElementById("playerVolumeOn").style.display = "block";
    }
  }
  closeMusicPopup();
}

// Function to close music popup
function closeMusicPopup() {
  const popup = document.getElementById('musicPopup');
  if (popup) popup.style.display = 'none';
}
