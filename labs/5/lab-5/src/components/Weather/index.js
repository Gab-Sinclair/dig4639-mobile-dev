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
                      <p>{value.name}</p>
                      <p>Temperature {value.temperature}{value.temperatureUnit}</p>
                      <p>{value.detailedForecast}</p>
                      </div>;
              })
          
          }
        </div>
      );
    }
  
  }
  
  export default Weather;
  