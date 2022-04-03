
// Enable all PopOvers
document.addEventListener("DOMContentLoaded", function() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popunder"]'))
  var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
});

// Copy text to clipboard function

  function copy(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);

    alert("Copied the text: " + TempText.value);
  }

//  Change View mode
function change_mode(){
  var changeView = document.body;
  var changeBtn = document.body.querySelector(".Btn-Li");
  var changeList = document.body.querySelectorAll(".accordion-item");
  var changeGrid = document.body.querySelectorAll(".skills-grid-dark");

  changeView.classList.toggle("light-mode");

  changeBtn.classList.toggle("Btn-Da");


  changeGrid.forEach(changeG => {
    changeG.classList.toggle("skills-grid-light");
  });

  changeList.forEach(changeL => {
    changeL.classList.toggle("dark_list");
  });


}
