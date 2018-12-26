window.onload = function () {
  var onePlayer = document.getElementById("onePlayer") ;
  onePlayer.onclick= function () {
      document.location.href = "oneplayer.html";
  };
  var twoPlayers =document.getElementById("twoPlayers");
  twoPlayers.onclick = function () {
      document.location.href = "twoplayers.html";
  };
};
