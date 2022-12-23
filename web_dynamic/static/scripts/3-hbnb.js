window.onload = () => {
  let amenity_list = [];

  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const h_amenities = document.querySelector('.amenities > h4');
  const apiStatusDiv = document.querySelector('#api_status');
  const places_data = document.querySelector('.places');

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

  fetch('http://localhost:5001/api/v1/status/')
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'OK') {
        apiStatusDiv.classList.add('available');
      } else {
        apiStatusDiv.classList.remove('available');
      }
    });

  fetch('http://localhost:5001/api/v1/places_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: {} }),
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((result) => {
        places_data.innerHTML = `
        <article>
	        <div class='title_box'>
	            <h2>${result.name}</h2>
	            <div class='price_by_night'>$${result.price_by_night}</div>
	        </div>
	        <div class='information'>
	            <div class='max_guest'>${result.max_guest} Guest${
          result.max_guest !== 1 ? 's' : ''
        }</div>
                <div class='number_rooms'>${result.number_rooms} Bedroom${
          result.number_rooms !== 1 ? 's' : ''
        }</div>
                <div class='number_bathrooms'>${
                  result.number_bathrooms
                } Bathroom${result.number_bathrooms !== 1 ? 's' : ''}</div>
	        </div>
            <div class='description'>
	            ${result.description}
            </div>
	    </article> `;
      });
    });
};
