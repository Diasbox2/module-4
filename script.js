(function () {
    
    var byeSpeaker = {
      speak(name) {
        console.log(speakWord + " " + name);
      }
    };
    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
  })();
  (function () {
    var helloSpeaker = {
      speak(name) {
        console.log(speakWord + " " + name);
      }
    };
    var speakWord = "Hello";
    window.helloSpeaker = helloSpeaker;
  })();
  (function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    })();
    