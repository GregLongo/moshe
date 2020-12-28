$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part : 'id', 
      playlistId : 'PLtOWkDblhNvDD9GatkEGQy2jfnhi7DWhd',
      type : 'video',
      key: /*###APIKEY###*/},
      function(data) {
        $.each( data.items, function( i, item ) {
          console.log(item);
          $('.audio__container').append(
            // [lyte id='###APIKEY###&index={{i}}' audio='true' /]
            // "[lyte id='"+item.id.videoId+"' audio='true' /]"
            )
        })
      }
  );
});