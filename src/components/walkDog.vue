<template>
  <div>
    <div class="container-fluid bg-img position-relative
    d-flex flex-column justify-content-center align-items-center">
      <div class="slogan-titel bg-light d-inline-block p-3 text-left mb-5" style="opacity: 0.65;">
        <h6 class="mb-0 h5-md">
          THE BEST BUDDY IN TAIPEI CITY
          <i class="fas fa-paw"></i>
        </h6>
        <h4 class="font-weight-bold h2-md">Always take care of you.</h4>
      </div>
      <div class="input-group w-md-50">
        <select class="custom-select" :class="{'is-invalid': !selectStatus}" v-model="isStaredZone">
          <option value="" selected>Zone</option>
          <option v-for="(item, index) in zoneData" :key="index"
          :value="item[1]">{{item[0]}}</option>
        </select>
        <div v-if="!selectStatus" class="w-100 bg-danger mt-1 text-white position-absolute"
        style="opacity: 0.75; bottom: -30px;">
          <small>請至少選取行政區 或 輸入街道名稱，再進行搜尋 !</small>
        </div>
        <div v-if="!searchStatus" class="w-100 bg-danger mt-1 text-white position-absolute"
        style="opacity: 0.75; bottom: -30px;">
          <small>該路段或街道尚未設置寵物便袋箱 或 該行政區查無此街道 !</small>
        </div>
        <input type="text" class="form-control w-50" placeholder="search for a street name"
        v-model="isStaredStreet" :class="{'is-invalid': !searchStatus}" @keyup.enter="searchBag">
        <div class="input-group-append">
          <button class="btn btn-dark" @click="searchBag">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="map-modal d-flex flex-column justify-content-center align-items-center"
      v-if="bagBoxData.length > 0" >
        <map-component :bag-data="bagBoxData"></map-component>
        <button type="button" class="close p-3 mt-3 bg-light rounded-lg" @click="removeMap">
          <span>&times;</span>
        </button>
      </div>
      <div class="alert alert-light alert-dismissible fade show position-absolute"
      style=" bottom:0;">
        <small class="mr-3">API: <a target="_blank" href="https://data.taipei/#/dataset/detail?id=d338aa80-2aec-4e9d-a7de-a5d980118e32">台北市資料大平台</a></small>
        <small>Img: <a target="_blank" href="https://unsplash.com/">unsplash</a></small>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import mapComponent from './map.vue';

export default {
  name: 'walkDog',
  components: {
    mapComponent,
  },
  data() {
    return {
      api: '',
      isStaredZone: '',
      isStaredStreet: '',
      selectStatus: true,
      searchStatus: true,
      bagBoxData: [],
      zoneData: {
        Shilin: ['士林區', '0ebbc89e-f392-4f8b-a7a1-c68c07fe2ab5?'],
        Datong: ['大同區', 'f5127e52-66ee-414b-8c34-ff593555efe0?'],
        Daan: ['大安區', '91826c42-9a2f-4939-a24e-87eca0b11899?'],
        Zhongshan: ['中山區', '00af3bf2-a1b2-4cb5-90f9-a880683cd245?'],
        Zhongzheng: ['中正區', 'bee47acb-ace5-4cb9-959a-908e8a9ee38d?'],
        Neihu: ['內湖區', 'a6daaad2-2c64-4111-805e-d52e56f6eca6?'],
        Wenshan: ['文山區', '59d8bf06-2578-47fc-82e8-061fcd8ae2e8?'],
        Beitou: ['北投區', '40affeec-1ab7-46c6-b16e-b6501579454b?'],
        Songshan: ['松山區', '90390375-1033-4675-9f1e-4387b4c3cb5e?'],
        Xinyi: ['信義區', 'ae400922-c2ca-4adb-8727-d8d8d50f7880?'],
        Nangang: ['南港區', 'e96afe5c-99cd-4c86-84cd-f94606cf5f70?'],
        Wanhua: ['萬華區', 'fe0698c6-747c-40e0-970e-393bb1ec5588?'],
      },
    };
  },
  methods: {
    searchBag() {
      if (!this.isStaredZone && !this.isStaredStreet) {
        this.selectStatus = false;
        this.searchStatus = true;
      } else if (!this.isStaredZone && this.isStaredStreet) {
        this.selectStatus = true;
        this.api = `https://data.taipei/api/v1/dataset/2822f947-7585-4da4-a1cf-f20d1475d4f8?scope=resourceAquire&q=${this.isStaredStreet}`;
        this.searchRequest();
      } else {
        this.selectStatus = true;
        this.api = `https://data.taipei/api/v1/dataset/${this.isStaredZone}scope=resourceAquire&q=${this.isStaredStreet}`;
        this.searchRequest();
      }
    },
    searchRequest() {
      const vm = this;
      this.axios.get(vm.api).then((res) => {
        if (res.data.result.results.length === 0) {
          vm.searchStatus = false;
        } else {
          vm.searchStatus = true;
          // 過濾資料庫部分經緯度非台北地區的錯誤地標 ...
          vm.bagBoxData = res.data.result.results.filter((item) => (item['緯度'] > 24.9809089 && item['緯度'] < 25.2540222) && (item['經度'] > 121.3922023 && item['經度'] < 121.6576136));
          // 關閉 Alert 標示
          $('.alert').alert('close');
        }
      });
    },
    removeMap() {
      this.bagBoxData = [];
    },
  },
};
</script>

<style scoped lang="scss">
.bg-img{
  background: url('https://upload.cc/i1/2020/11/24/YHTQ4C.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
}
.map-modal{
  position: absolute;
  background: rgba(0,0,0,0.5);
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1050;
  padding: 1rem;
}
@media (min-width: 768px) {
  .w-md-50{
    width: 50%;
  }
  .h2-md{
    font-size: 2rem;
  }
  .h5-md{
    font-size: 1.25rem;
  }
}
</style>
