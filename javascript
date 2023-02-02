if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    astrological_sign = 'Capricorn'
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    astrological_sign = 'Sagittarius'
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    astrological_sign = 'Scorpio'
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    astrological_sign = 'Libra'
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    astrological_sign = 'Virgo'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    astrological_sign = 'Leo'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    astrological_sign = 'Cancer'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    astrological_sign = 'Gemini'
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    astrological_sign = 'Taurus'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    astrological_sign = 'Aries'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    astrological_sign = 'Pisces'
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    astrological_sign = 'Aquarius'
  }

  // Get the year select element
  var yearSelect = document.getElementById("year");

  // Populate the year select element with options
  for (var i = 1900; i <= 2022; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
  }

  // Get the day select element
  var daySelect = document.getElementById("day");

  // Populate the day select element with options
  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
  }

  // Get the month select element
  var monthSelect = document.getElementById("month");

  // Event listener to update the number of days in the day select element when the month changes
  monthSelect.addEventListener("change", function() {
    // Get the selected year and month
    var year = yearSelect.value;
    var month = monthSelect.value;

    // Get the number of days in the selected month
    var numDays = new Date(year, month + 1, 0).getDate();

    // Update the day select element
    daySelect.innerHTML = "";
    for (var i = 1; i <= numDays; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      daySelect.appendChild(option);
    }
  });


