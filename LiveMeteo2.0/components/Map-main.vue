<template>
  <div>
  <div class="container4">
  <GmapMap
                :center="center"
                :zoom="2"
                style="height: 100vh; width:100vw; position: relative;"
                ref="mapRef"
                :options="mapStyle"
              >
              <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                @click="openMarker(m.id)" >
                  <GmapInfoWindow
                  :options="infoOptions"
                  :closeclick="true"
                  @closeclick="openMarker(null)"
                  :opened="openedMarkerID === m.id"
              >
                <div class="text-center" style="width:175px; height:86px;">
                  <h5>{{m.weather}}</h5>
                  <hr style="margin-bottom:5px !important; margin-top:5px !important; ">
                  <h6>{{m.wind}}<b-icon icon="thermometer"></b-icon> {{m.temp}}°</h6>
                  <p>@{{m.user}} o {{m.time}}</p>
              </div>
              </GmapInfoWindow>
                </GmapMarker>
              </GmapMap>
        <div>
    <b-button v-b-toggle.sidebar-footer class="bg-warning shadow-sm" style="position: absolute; top: 11%; right: 2%">O mapie</b-button>
    <b-sidebar id="sidebar-footer" visible aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-secondary text-light align-items-center px-3 py-2">
        <strong class="mr-auto"><img src="/logo2.png" style="width: 63px; height: 14px;"/></strong>
        <b-button class="bg-light text-dark" size="sm" @click="hide">Zamknij </b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <div style="padding-top:5%">
        <h3>Interaktywna mapa</h3>
        <p> Na tej mapie ,w postaci markerów, są wyświetlane raporty. Aby zobaczyć raport należy <b>kliknąć na marker</b> pokazany na mapie.
        </p>
        <hr>
        <div class="text-center">
        <p class="text-warning"><b>Uwaga!</b> Raporty są usuwane z mapy po
          określonym czasie <b-icon icon="exclamation-triangle-fill" animation="throb" scale="1" variant="warning"></b-icon></p>
        </div>
        <b-img src="/map.png" fluid thumbnail></b-img>
        <hr>
          <p class="text-primary text-center">Chcesz podzielić się pogodą w twoim rejonie?</p>
          <a class="btn btn-block btn-primary" href="/subpages/report" role="button">Utwórz własny raport!</a>
        </div>
        </div>
    </b-sidebar>
  </div>

  </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          id: 1,
          weather: "Słonecznie",
          wind: "Brak wiatru",
          temp: -5,
          user: "laszukk",
          time: "14:55",
          position: {
            lat: 51.093048,
            lng: 6.84212
          }
        },
        {
           id: 2,
           weather: "Pochmurnie",
            wind: "Silny wiatr",
            temp: 2,
            user: "laszukk",
            time: "13:00",
          position: {
            lat: 51.198429,
            lng: 6.69529
          }
        }
      ],
      mapStyle: {
          minZoom: 2.5,
          maxZoom: 8,
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
        },
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -5
          }
        }
    };
  },
  methods: {
    openMarker(id) {
       this.openedMarkerID = id
    }
  }
};
</script>


