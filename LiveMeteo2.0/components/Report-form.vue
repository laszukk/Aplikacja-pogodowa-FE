<template>
  <div>
    <div class="bg2">
      <div class=spacing1>
        <div class="container bg-light shadow" style=";
  padding: 20px;">
          <h3 class="display-8 text-center pt-3">Wypełnij raport</h3>
          <p class="text-danger" v-if="response.errors!=null && response.errors['login']!=null">{{response.errors['login'][0]}}</p>
          <form @submit.prevent="submitReport">
            <b-row>
              <b-col><div class="form-group mb-3">
                <label for="weatherSelect">Kategoria:</label>
                <select required id="weathers" v-model="kategoria" class="form-control form-select shadow-sm required">
                  <option value="" disabled>Podaj dane</option>
                  <option v-for="option in weather" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </div></b-col>
              <b-col><div class="form-group mb-3">
                <label for="windSelect">Wiatr:</label>
                <select required id="winds" v-model="wiatr" class="form-control form-select shadow-sm required">
                  <option value="" disabled>Podaj dane</option>
                  <option v-for="option in wind" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </div></b-col>
              <b-col><div class="form-group mb-3">
                <label for="windSelect">Temperatura:</label>
                <input id="temperature" type="number" placeholder="Podaj wartość" v-model="temperatura"  max="40" min="-40" required="" class="form-control shadow-sm ">
              </div></b-col>
              <div class="form-group mb-3">
                <input id="lat" type="hidden" required="" v-bind:value="myCoordinates.lat" >
              </div>
              <div class="form-group mb-3">
                <input id="lng" type="hidden" required="" v-bind:value="myCoordinates.lng" >
              </div>
              <b-col><div class="form-group mb-3">
                <label for="windSelect" class="text-light">.</label>
                <button type="submit" class="btn btn-primary btn-block text-uppercase shadow-sm">Wyślij</button>
              </div></b-col>
            </b-row>
          </form>
          <b-row>
            <GmapMap
              :center="centerCoordinates"
              :zoom="6"
              style="width: 100%; height:500px"
              ref="mapRef"
              :options="mapStyle"
            >
              <GmapMarker
                :position="myCoordinates"
                :clickable="true"
                :draggable="true"
                @drag="updateCoordinates">
                >
              </GmapMarker>
            </GmapMap>

          </b-row>
        </div>
        <div class="text-center pt-1">
          <img src="/logo2.png" style="width: 63px; height: 14px;"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      kategoria: "",
      wiatr: "",
      temperatura: "",
      response: "",
      accessToken: "seefsef",
      weather: [
        { text: 'SUNNY', value: 'SUNNY' },
        { text: 'RAINFALL', value: 'RAINFALL' },
        { text: 'CLOUDY', value: 'CLOUDY' },
        { text: 'SNOWING', value: 'SNOWING' },
        { text: 'STORM', value: 'STORM' },
        { text: 'HAILING', value: 'HAILING' }
      ],
      wind: [
        { text: 'STRONG', value: 'STRONG' },
        { text: 'WEAK', value: 'WEAK' },
        { text: 'NO', value: 'NO' }
      ],
      map: null,
      myCoordinates: {
        lat:  0,
        lng: 0
      },
      centerCoordinates: {
        lat:  0,
        lng: 0
      },
      mapStyle: {
        styles: [
          {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
              {
                "hue": "#008eff"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": "0"
              },
              {
                "lightness": "0"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "saturation": "-60"
              },
              {
                "lightness": "-20"
              }
            ]
          }
        ]
      }
    }
  },
  created() {
    if (process.client) {
      this.$getLocation({})
        .then(coordinates => {
          this.myCoordinates = coordinates;
          this.centerCoordinates = coordinates;
        })
        .catch(error => alert(error));
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {this.map = map})
  },
  methods: {
    updateCoordinates(location) {
      this.myCoordinates = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
    },
    submitReport() {
      this.accessToken = window.localStorage.getItem('authToken')

      axios.post('http://localhost:8080/api/reports', {
          coordinatesX: this.myCoordinates.lat,
          coordinatesY: this.myCoordinates.lng,
          category: this.kategoria,
          temperature: this.temperatura,
          wind: this.wiatr,
        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + this.accessToken
          }
        }).then(response => {
        console.log(response);
        console.log(response.data)
        this.response = response.data;
        if(this.response ==="True"){

          window.location.href = "http://localhost:3000/"
        }
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    }
  },
}
</script>

<style>
.spacing1 {
  padding-top: 0%;
}


.bg2 {
  min-height: 100vh;
  background-image: url('static/bggch.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
