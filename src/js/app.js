var coll = document.querySelector('.collapsible');
var content = document.querySelector('.content')

coll.addEventListener("click", function() {
    this.classList.toggle("active");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
