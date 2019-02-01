$(document).ready(function () {
  console.log("It Worked!")
  $(".submit").on("click", function (event) {
    event.preventDefault();
    console.log($("#item-1").val());
    var name = $('#name-input').val().trim();
    var photo = $('#photo-input').val();
    var item1 = parseInt($('#item-1').val());
    var item2 = parseInt($('#item-2').val());
    var item3 = parseInt($('#item-3').val());
    var item4 = parseInt($('#item-4').val());
    var item5 = parseInt($('#item-5').val());
    var item6 = parseInt($('#item-6').val());
    var item7 = parseInt($('#item-7').val());
    var item8 = parseInt($('#item-8').val());
    var item9 = parseInt($('#item-9').val());
    var item10 = parseInt($('#item-10').val());

    var userInput = {
      name: name,
      photo: photo,
      scores: [
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9,
        item10
      ]
    }

    $.post("/api/friends", userInput, function (data) {
      console.log(data);
      // Clear the form when submitting
      $('#name-input').val("")
      $('#photo-input').val("");
      $('#item-1').val(0);
      $('#item-2').val(0);
      $('#item-3').val(0);
      $('#item-4').val(0);
      $('#item-5').val(0);
      $('#item-6').val(0);
      $('#item-7').val(0);
      $('#item-8').val(0);
      $('#item-9').val(0);
      $('#item-10').val(0);
    });
  });
});