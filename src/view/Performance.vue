<template>
  <div class="container-table mt12">
    <div class="table-name">공연관리</div>

    <div class="filter-input-group mt30">
      <button class="delete-btn">
        선택항목 삭제
      </button>
      <div class="row gap32">
        <button class="excel-btn">
          엑셀 내려받기
        </button>
        <button class="common_btn w96" @click="modal">
          등록하기
        </button>
        <el-select placeholder="10개씩 보기"></el-select>
      </div>
    </div>

    <el-table class="mt24" :data="tableData" empty-text="검색결과가 없습니다." fit>
      <el-table-column type="selection" min-width="55"></el-table-column>
      <el-table-column label="No" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
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
          <button class="table-button w125" :class="{'activate' : row.status}">{{row.status ? '등록완료/수정' : 'DB 대기중/수정'}}</button>
        </template>
      </el-table-column>

    </el-table>
    <div class="filter-text-filed w100p justify-center mt30">
      <el-input class="w542 h38 mr12" placeholder="검색어를 입력해주세요.">
        <template #prefix>
          <div class="search-icon"></div>
        </template>
      </el-input>
      <button class="common_btn w87 h40">검색</button>
    </div>
    <pagination></pagination>
  </div>
<create-modal></create-modal>
</template>

<script>
import Pagination from "@/component/common/Pagination.vue"
import CreateModal from "@/component/modal/CreateModal.vue"

export default {
  name: "Performance",
  components: {
    Pagination,
    CreateModal
  },
  data() {
    return {
      tableData: [
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
  methods: {
    modal(){
      this.$vfm.show('createModal');
    }
  }
}
</script>
