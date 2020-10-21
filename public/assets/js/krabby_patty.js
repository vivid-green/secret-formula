$(function() {

  const postPatty = (event) => {
    event.preventDefault();
    const newPatty = {name: $("#cp").val()};
    $.ajax("/", {
        type: "POST",
        data: newPatty,
        success: function(res) {
          location.reload();
        }
    });
  }

  $(".eat-me").click(function(event) {
    const id = $(this).data("id");
    $.ajax("/" + id, {
      type: "PUT",
      success: function(res) {
        location.reload();
      }
    });
  })

  $(".create-form").on("submit", postPatty);

});