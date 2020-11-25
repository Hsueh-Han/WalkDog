<template>
  <div class="container-fluid map-height bg-light p-2 rounded-sm">
    <div id="map" style="height: 100%;">
      <div class="position-absolute w-100 p-3" style="z-index: 1000;">
        <div class="input-group input-group-sm w-90 ml-auto">
          <select class="custom-select" v-model="staredStreet"
          @change="getLocationList(staredStreet)">
            <option value="" disabled selected>選擇街道</option>
            <option v-for="(item, key) in streetList" :key="key" :value="item">{{item}}</option>
          </select>
          <select class="custom-select" v-model="staredLocation"
          :class="{'is-invalid': !staredLocationStatus}">
            <option value="" disabled selected>選擇地點</option>
            <option v-for="(item, key) in locationList"
            :key="key" :value="item">{{item['位置']}}</option>
          </select>
          <div class="input-group-append">
            <button class="btn btn-warning" type="button" @click="showLocation">
              <i class="fas fa-paw"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

export default {
  name: 'walkDog',
  props: ['bagData'],
  data() {
    return {
      mapInit: '',
      bagBoxArr: this.bagData,
      staredStreet: '',
      streetList: [],
      staredLocation: '',
      staredLocationStatus: true,
      locationList: [],
    };
  },
  mounted() {
    const map = L.map('map').setView([this.bagBoxArr[0]['緯度'], this.bagBoxArr[0]['經度']], 14);
    this.mapInit = map;
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    const markers = new L.MarkerClusterGroup().addTo(map);
    for (let i = 0; i < this.bagBoxArr.length; i += 1) {
      markers.addLayer(
        L.marker([this.bagBoxArr[i]['緯度'], this.bagBoxArr[i]['經度']], { icon: redIcon }).bindPopup(this.bagBoxArr[i]['路名'] + this.bagBoxArr[i]['位置']),
      );
    }
    map.addLayer(markers);
    this.getStreetList();
  },
  methods: {
    getStreetList() {
      const vm = this;
      this.bagBoxArr.forEach((item) => {
        if (vm.streetList.indexOf(item['路名']) === -1) {
          vm.streetList.push(item['路名']);
        }
      });
    },
    getLocationList(value) {
      this.staredLocation = '';
      this.locationList = this.bagBoxArr.filter((item) => item['路名'] === value);
    },
    showLocation() {
      if (this.staredLocation) {
        this.mapInit.setView([this.staredLocation['緯度'], this.staredLocation['經度']], 20);
        this.staredLocationStatus = true;
      } else if (this.staredStreet && !this.staredLocation) {
        this.staredLocationStatus = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.map-height{
  height: 70%;
  @media(min-width: 768px){
    height: 80%;
  }
}
.w-90{
  width: 90%;
}

</style>
