import React from 'react';
import {graphql} from 'react-apollo';
import { Component } from 'react'
import {getMonthlyFlights, getNumberOfPlanes, 
    getTopDestinations, getWeatherInCelsius, getWeatherObservationsForOrigin, 
    getMeanAirtimeForOrigin, getMeanDelays, getManufacturers, getDailyMeanTemperatureJFK} from  '../queries/queries'




class Airlines extends Component {
   displayTopDestinations (){
       var data = this.props.data;
       if(data.loading){
           return(<div>Loading...</div>); 
       }else{
          
        return data.getTopDestinations.map(destination =>{
            return(
            <li>{destination.name}</li>
            )
        });
        }      
       }
   
   render(){
  return (
    
    <div >
      <ul id="airlines"><h1>Top Destinations</h1></ul>
      {this.displayTopDestinations()}
    </div>
    
    );
  }
} 

//take graphql and use it to bind getMonthlyFlights query to the Airlines component 
//inside the component we have access to all the data that comes back from the query

export default graphql(getMonthlyFlights)(Airlines);
