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
let yourSign = '';
let fighter = '';

closeButton.forEach(element => {
  element.addEventListener("click", function (event) {
      event.preventDefault();
const questionButton = document.querySelector(".question-card");
questionButton.classList.add("hidden");
});
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const dateInput = document.querySelector(".js-date-input");
  let birthDate = new Date(dateInput.value);
  let month = birthDate.getMonth() + 1;
  let day = birthDate.getDate() + 1;
  let year = birthDate.getFullYear();

  getYourSign(month, day, year);
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

function getYourSign(month, day, year) {
  if (month >= 3 && month <= 4) { /*Aries*/
      if (month == 3 && day < 21) { /*starting date*/
          yourSign = "Pisces"; /*month before*/
      }
      else if (month == 4 && day > 19) { /*month after*/
          yourSign = "Taurus";
      }
      else {
          yourSign = "Aries"; /*month of*/
      }
  }

  else if (month >= 4 && month <= 5) { /* Taurus*/
      if (month == 4 && day < 20) { /*starting date*/
           yourSign = "Aries"; /*month before*/
      }
      else if (month == 5 && day > 20) { /*month after*/
           yourSign = "Gemini";
      }
      else {
           yourSign = "Taurus"; /*month of*/
      }
  }
  else if (month >= 5 && month <= 6) { /* Gemini*/
      if (month == 5 && day < 21) { /*starting date*/
           yourSign = "Taurus"; /*month before*/
      }
      else if (month == 6 && day > 20) { /*month after*/
           yourSign = "Cancer";
      }
      else {
           yourSign = "Gemini"; /*month of*/
      }
  }
  else if (month >= 6 && month <= 7) { /* Cancer*/
      if (month == 6 && day < 21) { /*starting date*/
          yourSign = "Gemini"; /*month before*/
      }
      else if (month == 7 && day > 22) { /*month after*/
           yourSign = "Leo";
      }
      else {
           yourSign = "Cancer";/*month of*/
      }
  }
  else if (month >= 7 && month <= 8) { /* Leo*/
      if (month == 7 && day < 23) { /*starting date*/
           yourSign = "Cancer"; /*month before*/
      }
      else if (month == 7 && day > 22) { /*month after*/
           yourSign = "Virgo";
      }
      else {
           yourSign = "Leo";/*month of*/
      }
  }
  else if (month >= 8 && month <= 9) { /* Virgo*/
      if (month == 8 && day < 23) { /*starting date*/
           yourSign = "Leo"; /*month before*/
      }
      else if (month == 7 && day > 22) { /*month after*/
           yourSign = "Libra";
      }
      else {
           yourSign = "Virgo"; /*month of*/
      }
  }
  else if (month >= 9 && month <= 10) { /* Libra*/
      if (month == 9 && day < 23) { /*starting date*/
           yourSign = "Virgo"; /*month before*/
      }
      else if (month == 7 && day > 22) { /*month after*/
           yourSign = "Scorpio";
      }
      else {
           yourSign = "Libra"; /*month of*/
      }
  }
  else if (month >= 10 && month <= 11) { /* Scorpio*/
      if (month == 10 && day < 23) { /*starting date*/
           yourSign = "Libra"; /*month before*/
      }
      else if (month == 11 && day > 21) { /*month after*/
           yourSign = "Sagittarius";
      }
      else {
           yourSign = "Scorpio"; /*month of*/
      }
  }
  else if (month >= 11 && month <= 12) { /* Sagittarius*/
      if (month == 11 && day < 22) { /*starting date*/
           yourSign = "Scorpio"; /*month before*/
      }
      else if (month == 12 && day > 21) { /*month after*/
           yourSign = "Capricorn";
      }
      else {
           yourSign = "Sagittarius"; /*month of*/
      }
  }
  else if (month >= 12 && month <= 1) { /* Capricorn*/
      if (month == 12 && day < 22) { /*starting date*/
           yourSign = "Sagittarius";/*month before*/
      }
      else if (month == 1 && day > 19) { /*month after*/
           yourSign = "Aquarius";
      }
      else {
           yourSign = "Capricorn";/*month of*/
      }
  }
  else if (month >= 1 && month <= 2) { /* Aquarius*/
      if (month == 1 && day < 20) { /*starting date*/
           yourSign = "Capricorn"; /*month before*/
      }
      else if (month == 2 && day > 18) { /*month after*/
           yourSign = "Pisces";
      }
      else {
           yourSign = "Aquarius"; /*month of*/
      }
  }
  else {
       yourSign = "Pisces";
  }
}



if (yourSign === "Aquarius") {
    audio = document.getElementById("audio-adesanya");
    fighter = document.getElementById("adesanya");
}
else if (yourSign === "Pisces") {
    audio = document.getElementById("audio-islam");
    fighter = document.getElementById("islam");
}
else if (yourSign === "Aries") {
    audio = document.getElementById("audio-jiri");
    fighter = document.getElementById("jiri");
}
else if (yourSign === "Taurus") {
    audio = document.getElementById("audio-jones");
    fighter = document.getElementById("jones");
}
else if (yourSign === "Gemini") {
    audio = document.getElementById("audio-khabib");
    fighter = document.getElementById("khabib");
}
else if (yourSign === "Cancer") {
    audio = document.getElementById("audio-connor");
    fighter = document.getElementById("connor");
}
else if (yourSign === "Leo") {
    audio = document.getElementById("audio-mighty");
    fighter = document.getElementById("mighty");
}
else if (yourSign === "Virgo") {
    audio = document.getElementById("audio-paddy");
    fighter = document.getElementById("paddy");
}
else if (yourSign === "Libra") {
    audio = document.getElementById("audio-alex");
    fighter = document.getElementById("alex");
}
else if (yourSign === "Scorpio") {
    audio = document.getElementById("audio-glover");
    fighter = document.getElementById("glover");
}
else if (yourSign === "Sagittarius") {
    audio = document.getElementById("audio-tony");
    fighter = document.getElementById("tony");
}
else if (yourSign === "Capricorn") {
    audio = document.getElementById("audio-volk");
    fighter = document.getElementById("volk");
}

fighter.classList.remove('hidden');
    audio.play();
    console.log(closeButton);
    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            fighter.classList.add("hidden");
            audio.pause();
        })
    })