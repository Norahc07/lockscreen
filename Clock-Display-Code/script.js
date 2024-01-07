document.addEventListener("DOMContentLoaded", function () {
    var prevPeriod = null; // Variable to store the previous period (am/pm)
  
    function updateClock() {
      var now = new Date();
  
      var options = { timeZone: "Asia/Manila", hour12: true, hour: 'numeric', minute: 'numeric' };
      var formatter = new Intl.DateTimeFormat('en-US', options);
      var timeString = formatter.format(now);
  
      var timeParts = timeString.match(/\d+/g);
      var hours = parseInt(timeParts[0]);
      var minutes = parseInt(timeParts[1]).toString().padStart(2, '0');
  
      // Determine the period based on the current hours
      var period = hours >= 12 ? 'p' : 'a';
  
      // Convert to 12-hour format
      hours = (hours % 12) || 12;
  
      // Update the flipped class based on the period
      document.getElementById("id-1093").classList.toggle("flipped", period === 'p');
      document.getElementById("id-1098").classList.toggle("flipped", period === 'p');
      document.getElementById("id-1099").classList.toggle("flipped", period === 'p');
      document.getElementById("id-10910").classList.toggle("flipped", period === 'p');
  
      // Set digit values to corresponding rectangles
      document.getElementById("id-1093").querySelector('.front .node-11122-0').innerHTML = Math.floor(hours / 10);
      document.getElementById("id-1093").querySelector('.back .node-11122-0').innerHTML = Math.floor(hours / 10);
      
      document.getElementById("id-1098").querySelector('.front .node-11122-0').innerHTML = (hours % 10);
      document.getElementById("id-1098").querySelector('.back .node-11122-0').innerHTML = (hours % 10);
      
      document.getElementById("id-1099").querySelector('.front .node-11122-0').innerHTML = Math.floor(minutes / 10);
      document.getElementById("id-1099").querySelector('.back .node-11122-0').innerHTML = Math.floor(minutes / 10);
      
      document.getElementById("id-10910").querySelector('.front .node-11122-0').innerHTML = (minutes % 10);
      document.getElementById("id-10910").querySelector('.back .node-11122-0').innerHTML = (minutes % 10);
  
      // Set AM/PM indicator
      var amPmIndicator = document.getElementById("id-11125").firstElementChild;
      var currentPeriod = timeString.charAt(timeString.length - 2).toLowerCase(); // Extract last character and convert to lowercase

      if (prevPeriod !== currentPeriod) {
          // If the period has changed, update the day
          updateDate();
          prevPeriod = currentPeriod;
      }

      amPmIndicator.innerHTML = currentPeriod;
    }
  
    function updateDate() {
      var now = new Date();
      var options = { timeZone: "Asia/Manila", weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      var formatter = new Intl.DateTimeFormat('en-US', options);
      var dateString = formatter.format(now);
  
      // Set date value to corresponding element
      document.getElementById("id-11127").innerHTML = '<span class="node-11127-0">' + dateString + '</span>';
    }
  
    setInterval(updateClock, 1000); // Update the clock every second
    setInterval(updateDate, 86400000); // Update the date every 24 hours (86400000 milliseconds)
  
    updateClock(); // Initial call to display clock
    updateDate(); // Initial call to display date
  });
  