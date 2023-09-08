document.addEventListener("DOMContentLoaded", function() {
    // JavaScript interactions here
    
    // Example: Change text color when a list item is clicked
    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
      item.addEventListener("click", function() {
        this.style.color = "red";
      });
    });
  });
  