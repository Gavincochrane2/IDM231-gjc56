const submitButton = document.querySelector(".js-submit-button");
const divElement = document.querySelector("[data-content-area]");
const closeButton = document.querySelectorAll(".close-card");
const questionButton = document.querySelector(".question-button");
const learnButton1 = document.querySelector(".learn-more1");
const learnButton2 = document.querySelector(".learn-more2");
const learnButton3 = document.querySelector(".learn-more3");
const learnButton4 = document.querySelector(".learn-more4");
const learnButton5 = document.querySelector(".learn-more5");
const learnButton6 = document.querySelector(".learn-more6");
const learnButton7 = document.querySelector(".learn-more7");
const learnButton8 = document.querySelector(".learn-more8");
const learnButton9 = document.querySelector(".learn-more9");
const learnButton10 = document.querySelector(".learn-more10");
const learnButton11 = document.querySelector(".learn-more11");
const learnButton12 = document.querySelector(".learn-more12");

 
  function getYourSign(month, day, year) {

  let astrological_sign = "";

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    astrological_sign = 'Capricorn'
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    astrological_sign = 'Sagittarius'
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    astrological_sign = 'Scorpio'
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    astrological_sign = 'Libra'
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    astrological_sign = 'Virgo'
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    astrological_sign = 'Leo'
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    astrological_sign = 'Cancer'
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    astrological_sign = 'Gemini'
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    astrological_sign = 'Taurus'
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    astrological_sign = 'Aries'
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    astrological_sign = 'Pisces'
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    astrological_sign = 'Aquarius'
  }
}

let fighter = "";

if (astrological_sign = "Aquarius") {
    audio = document.getElementById("audio-adesanya");
    fighter = document.getElementById("adesanya");
}
else if (astrological_sign == "Pisces") {
    audio = document.getElementById("audio-islam");
    fighter = document.getElementById("islam");
}
else if (astrological_sign == "Aries") {
    audio = document.getElementById("audio-jiri");
    fighter = document.getElementById("jiri");
}
else if (astrological_sign == "Taurus") {
    audio = document.getElementById("audio-jones");
    fighter = document.getElementById("jones");
}
else if (astrological_sign == "Gemini") {
    audio = document.getElementById("audio-khabib");
    fighter = document.getElementById("khabib");
}
else if (astrological_sign == "Cancer") {
    audio = document.getElementById("audio-connor");
    fighter = document.getElementById("connor");
}
else if (astrological_sign == "Leo") {
    audio = document.getElementById("audio-mighty");
    fighter = document.getElementById("mighty");
}
else if (astrological_sign == "Virgo") {
    audio = document.getElementById("audio-paddy");
    fighter = document.getElementById("paddy");
}
else if (astrological_sign == "Libra") {
    audio = document.getElementById("audio-alex");
    fighter = document.getElementById("alex");
}
else if (astrological_sign == "Scorpio") {
    audio = document.getElementById("audio-glover");
    fighter = document.getElementById("glover");
}
else if (astrological_sign == "Sagittarius") {
    audio = document.getElementById("audio-tony");
    fighter = document.getElementById("tony");
}
else if (astrological_sign == "Capricorn") {
    audio = document.getElementById("audio-volk");
    fighter = document.getElementById("volk");
}

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dateInput = document.querySelector(".js-date-input");
    let birthDate = new Date(dateInput.value);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    getYourSign(month, day, year);
});

closeButton.forEach(element => {
  element.addEventListener("click", function (event) {
      event.preventDefault();
const questionButton = document.querySelector(".question-card");
questionButton.classList.add("hidden");
});
});


fighter.classList.remove("hidden");
    audio.play();
    console.log(closeButton);
    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            fighter.classList.add("hidden");
            audio.pause();
        });
    });

    questionButton.addEventListener("click", function () {
      const questionButton = document.querySelector(".question-card");
      questionButton.classList.toggle("hidden");
  });
  
  /* gallery learn more */
  learnButton1.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".adesanya-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".adesanya-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton2.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".islam-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".islam-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton3.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".jiri-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".jiri-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton4.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".jones-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".jones-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton5.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".khabib-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".khabib-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton6.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".connor-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".connor-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton7.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".mighty-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".mighty-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton8.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".paddy-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".paddy-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton9.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".alex-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".alex-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton10.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".glover-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".glover-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton11.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".tony-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".tony-card");
      questionButton.classList.add("hidden");
      });
      });
  });
  learnButton12.addEventListener("click", function () {
      const learnButton1 = document.querySelector(".volk-card");
      learnButton1.classList.toggle("hidden");
  
      closeButton.forEach(element => {
          element.addEventListener("click", function (event) {
              event.preventDefault();
      const questionButton = document.querySelector(".volk-card");
      questionButton.classList.add("hidden");
      });
      });
  });