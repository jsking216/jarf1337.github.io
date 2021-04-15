<template>
  <div>
    <span v-if="errorStr === null">Your location is {{ JSON.stringify(location) }}</span>
    <span v-else>{{ errorStr }}</span>
    <span v-if="errorStr === null">Your weather is {{ JSON.stringify(weather) }}</span>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "DemoComponent",
  data: function() {
    return {
    location:null,
    errorStr:null,
    weather: null,
  };
  },
  mounted () {
    this.$getLocation()
      .then((coordinates) => {
        this.location = coordinates;
        console.log(coordinates);
        const callUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=2b83c216854254bdc36a1293fe363579`;
        console.log(callUrl);
        return axios.get(callUrl);
      })
      .then(response => (this.weather = response))
      .catch((error) => {
        this.errorStr = error.message;
        console.log(error);
      });
    
  },
};
</script>