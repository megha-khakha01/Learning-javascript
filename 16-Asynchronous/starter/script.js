'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////


const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
 request.send();

 request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);


 const html = '
         <article class="country">
           <img class="country__img" src="" />
           <div class="country__data">
             <h3 class="country__name">COUNTRY</h3>
             <h4 class="country__region">REGION</h4>
             <p class="country__row"><span>👫</      span>POP people</p>
             <p class="country__row"><span>🗣️</span>LANG</p>
             <p class="country__row"><span>💰</span>CUR</p>
           </div>
         </article>
 ';
});