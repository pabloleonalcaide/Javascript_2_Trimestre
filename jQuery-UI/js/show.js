  $(function() {
      function makeAppear() {

          $("div").show("explode", 2000);
      };

      //callback function to bring a hidden box back
      function callback() {
          setTimeout(function() {
              $("#effect:visible").removeAttr("style").fadeOut();
          }, 1000);
      };

      // Set effect from select menu value
      $("#botoncito").on("click", function() {
          makeAppear();
      });

      $("#effect").hide();
  });