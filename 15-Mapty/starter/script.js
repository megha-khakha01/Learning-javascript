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
    workout = [];          


    constructor(coords, distance, duration){
       //this.date = ...
       //this.id =...
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
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

    _newWorkout(e) {
        const validInputs = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    
    e.preventDefault();
    
    // Get data from form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
   const{lat,lng} = this.#mapEvent.latlng;
   let workout;




    // If workout running, create running object
    if(type === 'running') {
        const cadence = +inputCadence.value;

     // Check if data is valid
     if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence
     )
     return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lang], distance, duration, candence);

    }

    // If workout cycling, create cycling object
    if(type === 'cycling'){
        const elevation = +inputElevation.value;
     if ( !validInputs(distance, duration, elevation) ||  
     !allPositive(distance, duration)
    )
    return alert('Inputs have to be positive number!');
    workout = new Cycling([lat, lang], distance, duration, elevation);
}

    // Add new object to workout array
         this.#workouts.push(workout);
         console.log(workout);


    // Render workout on map as marker
      this.renderWorkoutMarker(workout)
    });

    // Render workout on list

    // Hide form + Clear input fields
    inputDistance.value = inputDurstion = inputCadence = inputElevation ='';




    //Display marker
        

    // Render workout on lists

    this._renderWorkout(workout)

    // HIde form + clear input fields

    inputType.addEventListener('change',function () {
        inputElevation.('.form_row') .classList.toggle('form_row--hidden')
        inputCadence.closest('.form_row').classList.toogle('form_row--hidden')
    });

    _renderWorkoutMarker(workout){
     L.marker(lat, lng)
       .addTo(this.#map)
       .bindPopup(
        L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: '$(type)-popup',
        })
       )
       .setPopupContent(workout.distance)
       .openPopup();
    }

    _renderWorkout(workout){
        const html = '
         <!-- <li class="workout workout--${workout.name}" data-id="${workout.id}">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.name === 'running'? '🏃‍♂️': '🚴'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        ';

    }



    const app = new App();








