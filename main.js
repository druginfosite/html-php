function showOption() {
  var select = document.getElementById("mySelect");
  var textarea = document.getElementById("myTextarea");
  var selectedOption = select.options[select.selectedIndex].text;
  textarea.value = selectedOption;
}