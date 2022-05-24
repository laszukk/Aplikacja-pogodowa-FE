<template>
  <div>
  <div class="container4">
  <GmapMap
                :center="center"
                :zoom="2"
                style="height: 93vh; position: relative;"
                ref="mapRef"
                :options="mapStyle"
              >
              <div v-for="(service, index) in markers" :key="index">
                        <div v-for="(item, key) in service" :key="key">
              <GmapMarker :position="{lat: item.x, lng: item.y}" :clickable="true"
                @click="openMarker(item.id)" >
                  <GmapInfoWindow
                  :options="infoOptions"
                  :closeclick="true"
                  @closeclick="openMarker(null)"
                  :opened="openedMarkerID === item.id"
              >
                <div class="text-center" style="width:175px; height:86px;">
                  <h5>{{item.category}}</h5>
                  <hr style="margin-bottom:5px !important; margin-top:5px !important; ">
                  <h6>{{item.wind}}<b-icon icon="thermometer" animation="fade"></b-icon> {{item.temperature.slice(0, 2)}}°</h6>
                  <p>@{{item.name}} o {{item.created_time}}</p>
              </div>
              </GmapInfoWindow>
                </GmapMarker>
                 </div>
                        </div>
              </GmapMap>
        <div>
    <b-button v-b-toggle.sidebar-footer class="bg-warning shadow-sm fixed-bottom rounded-right text-left" style="width: 100px;border-radius: 0%;">O mapie<b-icon icon="chevron-double-right" animation="throb" scale="1"></b-icon></b-button>
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
          <a v-if="role==1 || role==2" class="btn btn-block btn-primary" href="/subpages/report" role="button">Utwórz własny raport!</a>
          <a v-if="role==0" class="btn btn-block btn-primary" href="/subpages/register" role="button">Dołącz do nas!</a>
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
      role: 2, // rola guest,admin lub user tak jak w layout
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: null,
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
  async fetch(){
      this.markers= await fetch('http://localhost:8080/api/reports').then(res=>res.json())
    },
  methods: {
    openMarker(id) {
       this.openedMarkerID = id
    }
  }
};
</script>


