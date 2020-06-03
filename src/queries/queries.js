import {gql} from 'apollo-boost';

const getMonthlyFlights = gql`

{
    totalMonthlyFlights(year: 2013, month: 12) {
      flights
    }
  }

`

const getTopDestinations = gql`

{
    topDestinations {
      airport {
        faa
        name
      }
      inbound_flights
    }
  }
`
const getMeanAirtimeForOrigin = gql`

{
    meanAirtimeForOrigin(origin: "EWR") {
      mean_airtime
    }
  }
`
const getWeatherObservationsForOrigin = gql`

{	
    weatherObservationsForOrigin(origin: "EWR") {
      origin {
        faa
        name
      }
      weather_observations
    }
  }
`

const getWeatherInCelsius = gql`

{
    weatherInCelsius(origin: "EWR") {
      origin
      temp
      dewp
    }
  }
`

const getDailyMeanTemperatureJFK = gql`

{
    dailyMeanTemperatureJFK {
      year
      month
      day
      mean_temperature
    }
  }
`
const getMeanDelays = gql`

{
    meanDelays {
      airport
      average_arr_delay
      average_dep_delay
    }
  }
`
const getManufacturers = gql`

{
    manufacturers(threshold: 200) {
      manufacturer
      number_of_planes
    }
  }
`

const getNumberOfPlanes = gql`

{
    numberOfPlanes(manufacturer: "airbus") {
      manufacturer
      model
      number_of_planes
    }
  }
`

export {getMonthlyFlights, getNumberOfPlanes, 
    getTopDestinations, getWeatherInCelsius, getWeatherObservationsForOrigin, 
    getMeanAirtimeForOrigin, getMeanDelays, getManufacturers, getDailyMeanTemperatureJFK};