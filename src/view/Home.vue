<template>
  <div class="container-content">
    <div class="box-list">
      <div class="info-box">
        <div class="info-name">이번주 공연</div>
        <div class="info-data">3,500개</div>
      </div>
      <div class="info-box">
        <div class="info-name">등록 공연 리스트</div>
        <div class="info-data">3,500건</div>
      </div>
      <div class="info-box">
        <div class="info-name">회원수</div>
        <div class="info-data">2,534명</div>
      </div>
    </div>
    <div class="h13"></div>
    <div class="container-table">
      <div class="table-name">이번주 공연 리스트</div>
      <el-table class="mt22" :data="tableData" empty-text="검색결과가 없습니다." fit>
        <el-table-column prop="title" label="공연명"min-width="424">
          <template #default="{ row }">
            {{ row.title }}
          </template>
        </el-table-column>

        <el-table-column prop="venue" label="공연장" min-width="180">
          <template #default="{ row }">
            {{ row.venue }}
          </template>
        </el-table-column>

        <el-table-column prop="date" label="공연날짜" min-width="180">
          <template #default="{ row }">
            {{ row.date }}
          </template>
        </el-table-column>

        <el-table-column prop="session" label="회차" min-width="150">
          <template #default="{ row }">
            {{ row.session }}
          </template>
        </el-table-column>

        <el-table-column prop="host" label="주최사" min-width="150">
          <template #default="{ row }">
            {{ row.host }}
          </template>
        </el-table-column>

        <el-table-column prop="memo" label="메모" min-width="150">
          <template #default="{ row }">
            {{ row.memo }}
          </template>
        </el-table-column>

        <el-table-column prop="createdAt" label="등록일" min-width="180">
          <template #default="{ row }">
            {{ row.createdAt }}
          </template>
        </el-table-column>

        <el-table-column prop="status" label="상태" min-width="200">
          <template #default="{ row }">
            <button class="table-button w125" :class="{'activate' : row.status}">{{row.status ? '등록완료' : 'DB 대기중'}}</button>
          </template>
        </el-table-column>

      </el-table>
      <pagination></pagination>

    </div>
  </div>
</template>

<script>
import SideMenuBar from "@/component/common/SideMenuBar.vue"
import Pagination from "@/component/common/Pagination.vue"

export default {
  name: "Home",
  components: {
    SideMenuBar,
    Pagination,
  },
  data() {
    return {
      path: this.$route.path,

      tableData : [
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: false
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
        {
          title: '최고다! 호기심딱지 시즌3',
          venue: '울산대공연장',
          date: '2025-03.24',
          session: '1회차',
          host: '숨비랩',
          memo: '목요일 티켓 마감',
          createdAt: '2025.03.24 12:23',
          status: true
        },
      ]
    }
  },

}
</script>