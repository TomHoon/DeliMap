<script setup>
import { onMounted } from 'vue';
import Menu from './main/menu.vue'

onMounted(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    let marker = new kakao.maps.Marker({
        //지도 중심좌표에 마커를 생성합니다.
        position: map.getCenter()
    });

    marker.setMap(map);

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        let latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';

        console.log(message)
    }, { passive: true }); //패시브 이벤트 핸들러로 설정
});
</script>

<template>
  <div>
    <div id="map"></div>
    <Menu />
  </div>
</template>

<style scoped>
#map{
  width: 100vw;
  height: 100vh;
}

</style>