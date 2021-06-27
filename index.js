const region = 'beirut';
const apiKey = "5462f4840320546aedc33d109a4275c3";

var select = document.getElementById('countries')
function loadCountries(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(x => x.json())
    .then(y => 
        {
            for(let i =0; i<250;i++){
                var option = document.createElement('option');
                option.innerHTML = y[i].name;
                select.appendChild(option);
                
    
            }
        });
}


var getWeatherBtn = document.getElementById("getWeather");

function getweather(){
    let location = document.getElementById("countries").value;
    if(location!='Open this select menu'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5462f4840320546aedc33d109a4275c3`)
.then(x => x.json())
.then(y => 
    {
        if(location!='Open this select menu'){
            document.getElementById("Card").style.visibility = "visible";
            console.log(y.weather[0].main);
            document.getElementById("weatherDiv").innerHTML = y.weather[0].main + ',';
            document.getElementById("weatherDiv2").innerHTML =  y.weather[0].description;
            let img = document.createElement('img');
            img.src = `http://openweathermap.org/img/wn/${y.weather[0].icon}@2x.png`;
            document.getElementById("weatherDiv3").innerHTML = '';
            if(document.getElementById("weatherDiv3").childNodes[0])
            {
                document.getElementById("weatherDiv3").removeChild( document.getElementById("weatherDiv3").childNodes[0]);
            }
            document.getElementById("weatherDiv3").appendChild(img);
            let countryFlag = document.getElementById('countryFlag');
            
            //get The flag 
            fetch(`https://restcountries.eu/rest/v2/name/${location}?fields=flag`)
            .then(x => x.json())
            .then(y =>
                { 
                
                        
                        console.log(y[0].flag);
                        countryFlag.src = y[0].flag;
                       
                        
            
                    
                });
           
        }else{
            alert('Please choose a Country')
        }
       
       
    }).catch(err => console.log('Error:',err))
  }else{
    alert('Please choose a Country')
}
}