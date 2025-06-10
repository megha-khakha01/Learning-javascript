'use strict';

prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(https://www.google.pt/maps/@{latitude},${longitude}');

        const coords = [latitude , longitude]

         map = L.map('map').setView(coords, 13);
        //console.log(map);

        L.titleLayer('http://{s}.title.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href ="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }) .addTo(map);

        //Handling clicks on map
        map.on('click', function(mapE){
            mapEvent = mapE;
            FormData.classList.remove('hidden')
            inputDistance.focus();


   
    },
    function () {
        alert('Could not get your position');
    }
);

form.addEventListener('submit',function(e) {
    e.preventDefault();

    //inputDistance.value = inputDurstion = inputCadence = inputElevation =

    //Display marker
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

    inputType.addEventListener('change',function () {
        inputElevation.('.form_row') .classList.toggle('form_row--hidden')
        inputCadence.closest('.form_row').classList.toogle('form_row--hidden')
    });