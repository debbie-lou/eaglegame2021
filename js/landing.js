// JavaScript Document
const countdown = document.querySelector('.countdown');
const remove = document.querySelector('.remove');
const countOver = document.querySelector('.countOver');

// Set Launch Date (ms)
const launchDate = new Date('Oct 19, 2021 07:30:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
		remove.innerHTML = '';
		countdown.innerHTML ='';
		countOver.style.opacity = '1';
		countOver.innerHTML = '<div><h1 class="att">Attention all players<h1><p><strong>The game is about to begin.<br>Players will be eliminated every hour.<br>Please make youre way to the game hall.</strong><br><br><a href="https://mywhccd-my.sharepoint.com/:x:/g/personal/debbielouangeles_whccd_edu/ESutZOzEK6VCniBQ2fTcZhQB7lhyizl7p64lIpkI1t-OWQ?e=AIuCUu" target="_blank"><button>Find your number</button><br></a><a href="https://whccd-edu.zoom.us/j/91443385664?pwd=V2VudG9ROE1GYzJmWkx1dTZncUZrUT09" target="_blank"><button>Enter the Game Hall</button></a></p></div>';
  }
}, 1000);
