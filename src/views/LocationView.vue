<template>
    <div></div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const latitude = ref(null);
const longitude = ref(null);

const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };
    const showPosition = (position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      const mapUrl = `https://maps.google.com/?q=${latitude.value},${longitude.value}`;
      window.open(mapUrl, '_blank');
    };
    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
      }
    };
onMounted(() => {
      getLocation(); // เรียก getLocation เมื่อคอมโพเนนต์เมาท์แล้ว
    });
</script>

