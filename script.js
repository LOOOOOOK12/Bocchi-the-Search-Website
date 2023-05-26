let isExpanded = false; // keep track of whether the container is currently expanded

function expandContainer() {
  const container = document.getElementById("SearchContainer");
  if (!isExpanded) {
    // expand the container if it's not already expanded
    container.style.width = "750px";
    container.style.height = "800px";
    container.style.overflow = "auto";
    isExpanded = true;
  } else {
    // reset the container to its original size if it's already expanded
    container.style.width = "";
    container.style.height = "";
    container.style.overflow = "";
    isExpanded = false;
  }
}

const expandButton = document.getElementById("BTN_Search");
if(expandButton){
  expandButton.addEventListener("click", expandContainer);
}