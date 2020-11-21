import React, { Component } from 'react';



class WeatherApp extends Component {
  constructor(props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      city: '',
      wheatherData: [],
      loading: true
    }
  }

  async componentDidUpdate(prevProps, prevState) {

    if (prevState.city !== this.state.city) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=NULL`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState(() => {
        return {
          wheatherData: data
        }
      });
    }

  }

  formSubmit(e) {
    e.preventDefault();
    const cityName = e.target.elements.city.value;

    if (cityName) {
      this.setState({ city: cityName })
      e.target.elements.city.value = '';
    }
  }


  render() {
    return (
      <div className="App">

        <h1>wheahter finder</h1>
        <h1 >{this.state.wheather}</h1>
        <form onSubmit={this.formSubmit}>
          <input type='text' name='city' placeholder='ex: delhi,in' />
          <button>Submit</button>
        </form>
        {console.log(this.state.wheatherData)}

      </div>
    );
  }
}

export default WeatherApp;