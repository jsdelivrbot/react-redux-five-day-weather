<h1>REACT-REDUX FIVE DAY WEATHER APPLICATION</h1>

<p>A REACTJS weather application that charts the temperature, pressure and humidity values for a chosen UK city over a five day period. The application consumes data from the 3rd party API at www.openweathermap.org. "REDUX" is used to control the state and 'react-sparklines" is used to chart the weather values.</p>

<h2>VIEWING THE APPLICATION LIVE</H2>

<p>The application is hosted via HEROKU at the following web address: https://blooming-hamlet-54536.herokuapp.com/ </p>

<h2>DOWNLOADING THE APPLICATION</h2>

<p>The app can be downloaded by clicking on the green "clone or download" button at the top-right of this page</p> Deploying on your local machine assumes a NODEJS installation of version 8.5.0.</p>

<h3>TESTING THE APPLICATION</h3>

<P>To test the application simply enter any UK CITY in the searchbar at the top of app. Submitting a city request will return  3 charts showing the average temperature, pressure and humidity over a concurrent 5 day period starting from todays date.

<p>A red line through the chart will display the average which corresponds to the value shown beneath each chart. Temperature is shown in &deg;C, Pressure is shown in hPa, and Humidity is shown in %</p>


<p><b>Please note: The data shown may not be valid for any cities outside of the UK</b></p>

<h3>RETRO-SPECT REVIEWING OF THE PROJECT</h3>

<p>If more time had been allowed - I might possibly have re-configured the app to consume an additional 5 single days worth of data from www.openweathermap.org instead of one 5 day batch. I would have added a drop-down list that displayed a choice of single days and allowed the user to choose one or more of those days to display the data as single entities. This would be in addition to the 5 day chart functionality already built.</p>

<p>I may possibly have questioned the choice to show "pressure" and "humidity" for a UK based app user. A deeper review of UX might show data like "snowing" or "raining" or "hail" as being more of a user preference to the weather choices in question.</p>
