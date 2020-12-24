$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part : 'id', 
      playlistId : 'PLtOWkDblhNvDD9GatkEGQy2jfnhi7DWhd',
      type : 'video',
      key: 'AIzaSyBrJTMK8kzm21gHs45VFLJJFOOlvZX8pps'},
      function(data) {
        $.each( data.items, function( i, item ) {
          console.log(item);
          $('.audio__container').append(
            // [lyte id='PLtOWkDblhNvDD9GatkEGQy2jfnhi7DWhd&index={{i}}' audio='true' /]
            // "[lyte id='"+item.id.videoId+"' audio='true' /]"
            )
        })
      }
  );
});