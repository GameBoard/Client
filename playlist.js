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
      alert(songText);
    }
  }

}

window.onload = init;