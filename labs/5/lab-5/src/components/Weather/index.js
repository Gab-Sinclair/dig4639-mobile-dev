import React from "react";
class Weather extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        periods: []
      };
  
    }
  
    componentDidMount() {
  
      fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then(res => res.json())
      .then((result) => {
        let periods = result.properties.periods;
       
        this.setState({
          periods: periods
        });
        
      })
      .catch((error) => {console.log(error)} );
  
    }
  
    render() {
      return(
        <div>
        {
              this.state.periods.map((value, index) => {
                  return  <div className="card" key={index}>
                      <h3>{value.name}</h3>
                      <p><strong>Temperature {value.temperature}{value.temperatureUnit}</strong></p>
                      <p>{value.detailedForecast}</p>
                      </div>;
              })
          
          }
        </div>
      );
    }
  
  }
  
  export default Weather;
  