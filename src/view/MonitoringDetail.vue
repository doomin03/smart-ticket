<template>
  <div class="container-table mt12 flex gap29">
    <div class="column">
      <div class="data-title">공연명</div>
      <div class="data-box w403">
        최고다! 호기심딱지 뮤지컬 시즌3
      </div>

      <div class="data-title">공연장</div>
      <div class="data-box w403">
        성남아트센터
      </div>

      <div class="data-title">공연일/회차</div>
      <div class="data-box w403">
        2025년 3월 23일(일)
      </div>
      <div class="flex gap12">
        <div class="data-box w195">
          1 회차
        </div>
        <div class="data-box w195">
          11시
        </div>
      </div>

      <div class="data-title">좌석현황</div>

      <div class="flex gap12">
        <div class="data-box w195">전체좌석</div>
        <div class="data-box w195">1,200석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195">판매오픈좌석</div>
        <div class="data-box w195">950석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195">판매완료좌석</div>
        <div class="data-box w195">785석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195 h30 pt4 pm4 pl22">티켓링크</div>
        <div class="data-box w195 h30 pt4 pm4 pl22">485석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195 h30 pt4 pm4 pl22">인터파크티켓</div>
        <div class="data-box w195 h30 pt4 pm4 pl22">200석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195 h30 pt4 pm4 pl22">현장판매</div>
        <div class="data-box w195 h30 pt4 pm4 pl22">100석</div>
      </div>

      <div class="flex gap12">
        <div class="data-box w195">판매 가능 좌석</div>
        <div class="data-box w195">1,175석</div>
      </div>

      <button class="table-button w403 h69 activate radius12">공연입장 현황보기</button>
    </div>

    <div class="column w100p">
      <div class="row space-between">
        <div class="data-title">좌석배치도</div>
        <button class="common_btn w151 h18 fs15 fw500">현장판매바로가기</button>
      </div>
      <div class="data-box w100p h100p"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonitoringDetail"
}
</script>

<style scoped>
</style>
