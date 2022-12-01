// Define countdown end date time here
const end = new Date('Dec 09, 2032 12:00:00').getTime();

// Use setInterval to check and update countdown every 5 hundreths of a second
const int = setInterval(() => {

  // Get today's date and time in milliseconds
  const now = new Date().getTime();

  // Difference between now and countdown end in milliseconds
  const difference = end - now;

  // Time calculation
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const mins = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  // Display result if change detected
    $('.days').text() !== days ? $('.days').text(days) : null;
    $('.hours').text() !== hours ? $('.hours').text(hours) : null;
    $('.minutes').text() !== mins ? $('.minutes').text(mins) : null;
    $('.seconds').text() !== seconds ? $('.seconds').text(seconds) : null;

  //Once calculation is complete make countdown visible
  $('.countdown').addClass('visible'); 

  // If countdown reaches 0, stop countdown and clear .countdown div
  if (difference < 0) {
    clearInterval(int);
    $('.countdown').empty();
  }
}, 50);