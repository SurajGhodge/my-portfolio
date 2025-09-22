import React from 'react';

function WeatherApp() {
  return (
    <div className='container'>
      <div>
        <h4 className='text-primary mt-4'>Live Weather Info App</h4>
        <p className='mt-5'>
          <strong>Tech Stack:</strong> React.js, JavaScript, OpenWeatherMap API, CSS<br />
          <strong>Project Overview:</strong> Built a responsive single-page application that displays real-time weather information for any city input by the user. The app integrates with the OpenWeatherMap API to fetch current weather data and dynamically renders condition-specific icons.
          <br /><br />
          <strong>Key Features:</strong>
          <ul>
            <li>Search for any city to get current weather details.</li>
            <li>Dynamic weather icons that reflect actual weather conditions.</li>
            <li>Error handling for invalid city inputs or API issues.</li>
            <li>Responsive and clean UI for seamless user experience.</li>
          </ul>

          <h6>Highlights:</h6>
          <ul>
            <li>Real-time weather updates with API integration.</li>
            <li>Single-page application built using React.js for smooth navigation.</li>
            <li>Interactive and user-friendly interface with CSS styling.</li>
          </ul>

          <h6>Outcome:</h6>
          <p>The Live Weather Info App allows users to quickly check the weather for any city with accurate, real-time data and visually intuitive icons, providing a smooth and informative user experience.</p>

          <h6>Github Link: <a href='https://github.com/SurajGhodge/ReactWeatherApp'>Click Here</a></h6>
        </p>
      </div>
    </div>
  );
}

export default WeatherApp;
