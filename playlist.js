function init() {
  // alert("we have js BOo");
  var button = document.getElementById('addButton');
  console.log(button)
  button.onclick = handleButtonClick;

  function handleButtonClick() {
    songField = document.getElementById('songTextInput');
    songText = songField.value;
    if (songText == "") {
      alert("write something yo");
    } else {
      // alert(songText);
      playlistTable = document.getElementById('playlist');
      li = document.createElement('li');
      li.innerHTML = songText;
      playlistTable.appendChild(li);
    }
  }

}

window.onload = init;