#!/usr/bin/node
window.onload = () => {
  let amenity_list = [];
  
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  const h_amenities = document.querySelector('.amenities > h4');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        amenity_list.push(this.parentNode.textContent);
      } else {
        amenity_list.pop(this.parentNode.textContent);
      }
      h_amenities.innerHTML = amenity_list;
    });
  });

};