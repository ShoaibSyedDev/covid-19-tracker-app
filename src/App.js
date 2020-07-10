import React from 'react';
import Cards from './Cards'
import Chart from './Chart'
import CountryPicker from './CountryPicker'
import {FetchData} from './fetch'

import './App.css';

class App extends React.Component {
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const FetchedData = await FetchData();
    this.setState({data: FetchedData});
  }
  handleCountryChange=async(country)=>{
   
    const FetchedData = await FetchData(country);
    this.setState({data: FetchedData, country:country});
    console.log(FetchedData);
  }
   render(){  
    const {data,country}=this.state;
     
  return (
    <div className="App">
      <div className="div-head">
        <header>COVID-19 App Tracker By Syed Shoaib Abbas</header>
      </div>
     <Cards data={data} />
     <CountryPicker handleCountryChange={this.handleCountryChange} />
     <Chart data={data} country={country}/>
     <div className="div-footer"><footer><a href="https://github.com/ShoaibSyedDev/covid-19-tracker-app">Source Code Github Repository</a> </footer></div>
     
    </div>
  );}
}

export default App;

