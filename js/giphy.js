$(document).ready(function(){
  $("button").on('click', function(evt){
    evt.preventDefault();

    var limit = 100;
    var offset = 100;

    var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&limit=" + limit + "&offset=" + offset + "&api_key=dc6zaTOxFJmzC"
    // var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response.data[0].url);
      function tenPics(){
        for(i=0; i<=9; i++){
          $('body').append('<img src="'+response.data[i].images.fixed_height.url+'">');
        }
      }
      tenPics();
    }).fail(function(){
      console.log("Well this sux. It failed :(");
    }).always(function(){
      console.log("This always happens");
    })
  })
})
