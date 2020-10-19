$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const newPatty = {name: $("#cp").val().trim()};
        $.ajax("/", {
            type: "POST",
            data: newPatty
          }).then(
            function() {
              console.log("Added", newPatty);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });
});