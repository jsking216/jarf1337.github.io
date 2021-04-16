<template>
  <div>
    <span v-if="errorStr === null">Your location is {{ JSON.stringify(location) }}</span>
    <span v-else>{{ errorStr }}</span><br /><br />
    <span v-if="weather !== null">Should you mow? {{ shouldMow ? 'YES!' : 'NO!' }}</span><br /><br />
    <span v-if="weather !== null">Should you sprinkle? {{ shouldSprinkle ? 'YES!' : 'NO!' }}</span><br /><br />
  </div>
</template>

<script>
import axios from 'axios';
import { getSessionStorage, setSessionStorage } from '../util/storage';
import { shouldMowOrSprinkle } from '../util/weather';

export default {
  name: "DemoComponent",
  data: function() {
    return {
    location:null,
    errorStr:null,
    weather: null,
    shouldMow: false,
    shouldSprinkle: false,
  };
  },
  mounted () {
    if (getSessionStorage('weather') === null) {
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
    } else {
      this.weather = getSessionStorage('weather');
      // can't directly assign to this when destructuring
      const { shouldMow, shouldSprinkle } = shouldMowOrSprinkle(this.weather);
      this.shouldMow = shouldMow;
      this.shouldSprinkle = shouldSprinkle;
    }
  },
  watch: {
    weather(newWeather) {
      const { shouldMow, shouldSprinkle } = shouldMowOrSprinkle(newWeather);
      this.shouldMow = shouldMow;
      this.shouldSprinkle = shouldSprinkle;
      setSessionStorage('weather', newWeather);
    }
  }
};
</script>