var content = document.getElementById('content');
var ajaxRequest = new XMLHttpRequest();
var url = 'https://wind-bow.glitch.me/twitch-api/users/quin69';

ajaxRequest.open("GET", url, true);
responseType = 'json'
ajaxRequest.onload = function() {

  var data = JSON.parse(this.response);
  console.log(data);
appendChild()


  content.'<li class="list-group-item justify-content-between">Cras justo odio<span class="badge badge-default badge-pill">14</span></li>'

}
ajaxRequest.send();
