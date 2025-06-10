'use strict';

prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let map, mapEvent;

if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position) {
// APPLICATION ARCHITECTURE

    const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class aPP {
    #map;
    #mapEvent;

    constructor(){
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this_toggleElevationField);
    }

    _getPosition(){
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
    function () {
        alert ('could not get your position');
    }
);
    }

    _loadMap(position){
        const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(https://www.google.pt/maps/@{latitude},${longitude}');

      const coords = [latitude , longitude]
      this.#map = L.map('map').setView(coords, 13);
      //console.log(map);

        L.titleLayer('http://{s}.title.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href ="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }) .addTo(map);

        //Handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE
    }


   
    },
    function () {
        alert('Could not get your position');
    }
);

form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    // Get data from form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // Check if data is valid

    // If workout running, create running object
    if(type === 'running') {
        const cadence = +inputCadence.value;
    }

    // If workout cycling, create cycling object
    if(type === 'cycling'){
        const elevation = +inputElevation.value;
    }

    // Add new object to workout array

    // Render workout on map as marker
     console.log(mapEvent);
            const{lat, lng} = mapEvent.latlng;

      L.marker(lat, lng)
       .addTo(map)
       .bindPopup(
        L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        })
       )
       .setPopupContent('Workout')
       .openPopup();
    });

    // Render workout on list

    // Hide form + Clear input fields
    inputDistance.value = inputDurstion = inputCadence = inputElevation ='';

    //Display marker
        

    // Render workout on lists

    // HIde form + clear input fields

    inputType.addEventListener('change',function () {
        inputElevation.('.form_row') .classList.toggle('form_row--hidden')
        inputCadence.closest('.form_row').classList.toogle('form_row--hidden')
    });






