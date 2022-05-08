<template>
  <div>
    <div class="bg2">
    <div class=spacing1>
      <div class="container corners2 bg-light shadow">
        <b-row>
          <b-col>
              <GmapMap v-b-tooltip.hover="{ variant: 'dark' }" title="Wybierz lokalizację"
                :center="centerCoordinates"
                :zoom="6"
                style="width:640px; height:420px;"
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

          </b-col>
          <b-col>
            <div style="padding-top: 15%">
            <form>
              <div class="form-group mb-3">
              <h3 class="display-8 text-center">Wypełnij raport</h3>
              </div>
                                  <div class="form-group mb-3">
                                      <label for="weatherSelect">Kategoria:</label>
                                      <select id="weathers" class="form-control form-select shadow-sm required">
                                        <option v-for="option in weather" v-bind:key="option.value">
                                          {{ option.text }}
                                        </option>
                                      </select>
                                  </div>
                                  <div class="form-group mb-3">
                                  <label for="windSelect">Wiatr:</label>
                                  <select id="winds" class="form-control form-select shadow-sm required">
                                        <option v-for="option in wind" v-bind:key="option.value">
                                          {{ option.text }}
                                        </option>
                                  </select>
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="temperature" type="number" placeholder="Temperatura"  required="" class="form-control shadow-sm ">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="lat" type="hidden" required="" v-bind:value="myCoordinates.lat">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="lng" type="hidden" required="" v-bind:value="myCoordinates.lng">
                                  </div>

                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Wyślij</button>
            </form>
            </div>
          </b-col>
        </b-row>
      </div>
        <div class="text-center" style="padding-top: 1%">
        <img src="/logo2.png" style="width: 63px; height: 14px;"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data() {
      return {
        weather: [
          { text: 'Słonecznie', value: 's1' },
          { text: 'Deszczowo', value: 's2' },
          { text: 'Pochmurnie', value: 's3' }
        ],
        wind: [
          { text: 'Silny', value: 's1' },
          { text: 'Mały', value: 's2' },
          { text: 'Brak wiatru', value: 's3' }
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
        }
    },
}
</script>

<style>
  .spacing1 {
    padding-top: 10%;
  }

  .corners2 {
  border-radius: 15px;
  padding: 20px;
  width: 1000px;
  height: 460px;
  }

  .bg2 {
    min-height: 100vh;
    background-image: url('static/bggch.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
