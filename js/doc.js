// Open the default tab on page load
document.querySelector(".main-nav-link.active").click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.querySelectorAll(".tabcontent .tab-pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Deactivate all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and set the tab link as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
