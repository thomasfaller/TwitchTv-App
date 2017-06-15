var $url = 'https://wind-bow.glitch.me/twitch-api/';

                    // AJAX CALLS

function fccStatus() {                // Display the FCC channel status
var html = 'FreeCodeCamp is currently Online!'
$.ajax({
  url: $url +  'streams/' + 'freecodecamp', // URL
}).done(function(data) {
  if (data.stream === null) {
    html = 'FreeCodeCamp is currently Offline';
  }
  $('#fccstatus').html(html);
});
}

function userStatus(user) {
$.ajax({
  url: $url + 'users/' + user + '/follows/channels/', // URL
}).done(function(data) {
  for (var i = 0; i < data.follows.length; i++ ) {
      var path = data.follows[i].channel;     // assigning the JSON path to a variable to reduce code
      var bgc = path.profile_banner_background_color;
      var banner = path.profile_banner;
      var link = path.url;
      var username = path.display_name;

      if (path.logo === null) {      // Logo check loop
        var logo = 'http://www.mobilemag.com/wp-content/uploads/2012/09/twitch-tv-logo.png';
        } else {
        var logo = path.logo;
        }

        var $html = '<a href="' + link + '" target="_blank">'// Creating the <a> link to nest the html inside it

      if (path.status === null) {      // Status check loop + Class added based on OFF/ON status
        var status = '';
        $html += '<li class="list-group-item justify-content-between offline">';
        } else {
        var status = path.status;
        $html += '<li class="list-group-item justify-content-between online">';
        }

      $html += '<span class="text-capitalize">' + username + '</span>';
      $html += status;
      $html += '<img src=' + logo + ' alt="" >'
      $html += '</li></a>';
      $('#content').append($html);

    }
  });
}





$(document).ready(function() {
  fccStatus();
  userStatus('freecodecamp');

  $('#buttonAll').addClass('text-white');

  $('#buttonOn').click(function() {
    $('.text-white').toggleClass('text-white');
    $(this).addClass('text-white');
    $('.offline').hide();
    $('.online').show();
  });

  $('#buttonOff').click(function() {
    $('.text-white').toggleClass('text-white');
    $(this).addClass('text-white');
    $('.offline').show();
    $('.online').hide();
  });

  $('#buttonAll').click(function() {
    $('.text-white').toggleClass('text-white');
    $(this).addClass('text-white');
    $('.offline').show();
    $('.online').show();

  });


  });

// });
