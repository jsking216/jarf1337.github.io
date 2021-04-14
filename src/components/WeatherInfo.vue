<template>
  <div>
    <span v-if="errorStr === null">Your location is {{ JSON.stringify(location) }}</span>
    <span v-else>{{ errorStr }}</span>
  </div>
</template>

<script>
export default {
  name: "DemoComponent",
  data:{
    location:null,
    errorStr:null
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.location = coordinates;
        console.log(coordinates);
      })
      .catch((error) => {
        this.errorStr = error.message;
        console.log(error);
      });
  },
};
</script>