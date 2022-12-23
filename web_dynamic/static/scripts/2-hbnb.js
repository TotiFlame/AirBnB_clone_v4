#!/usr/bin/node
window.onload = () => {
  let amenity_list = [];

  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const h_amenities = document.querySelector('.amenities > h4');
  const apiStatusDiv = document.querySelector('#api_status');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        amenity_list.push(this.parentNode.textContent);
      } else {
        amenity_list.pop(this.parentNode.textContent);
      }
      h_amenities.innerHTML = amenity_list;
    });
  });

//   fetch('http://0.0.0.0:5001/api/v1/status/')
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status === 'OK') {
//         apiStatusDiv.classList.add('available');
//       } else {
//         apiStatusDiv.classList.remove('available');
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
};
