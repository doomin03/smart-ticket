<template>
  <div class="container-table mt12">
    <div class="table-name">모니터링</div>

    <div class="filter-input-group mt30 ">
      <div class="filter-text-filed">
        <el-input class="w542 h38 mr12" placeholder="검색어를 입력해주세요.">
          <template #prefix>
            <div class="search-icon"></div>
          </template>
        </el-input>
        <button class="common_btn w87 h40">검색</button>
      </div>
      <div class="row">
        <button class="excel-btn">
          엑셀 내려받기
        </button>
        <el-select placeholder="10개씩 보기"></el-select>
      </div>
    </div>

    <el-table class="mt24" :data="tableData" empty-text="검색결과가 없습니다." fit>
      <el-table-column label="No" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="공연명" min-width="424">
        <template #default="{ row }">
          {{ row.performanceName }}
        </template>
      </el-table-column>

      <el-table-column prop="venue" label="공연장" min-width="180">
        <template #default="{ row }">
          {{ row.venue }}
        </template>
      </el-table-column>

      <el-table-column prop="date" label="공연날짜" min-width="180">
        <template #default="{ row }">
          {{ row.performanceDate }}
        </template>
      </el-table-column>

      <el-table-column prop="session" label="회차" min-width="150">
        <template #default="{ row }">
          {{ row.session }}
        </template>
      </el-table-column>

      <el-table-column prop="host" label="판매완료석" min-width="150">
        <template #default="{ row }">
          {{ row.salesCompleted }}
        </template>
      </el-table-column>

      <el-table-column prop="memo" label="DB등록" min-width="150">
        <template #default="{ row }">
          {{ row.dbRegistered ? "완료" : "미완료"}}
        </template>
      </el-table-column>

      <el-table-column prop="createdAt" label="DB 등록일" min-width="180">
        <template #default="{ row }">
          {{ row.dbRegistrationDate }}
        </template>
      </el-table-column>

      <el-table-column prop="status" label="상태" min-width="200">
        <template #default="{ row }">
          <button class="table-button w125" :class="{'activate' : row.status}"  @click="moveDetail(row)">
            {{ row.status ? '상세보기/현장판매' : 'DB 대기중/수정' }}
          </button>
        </template>
      </el-table-column>

    </el-table>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from "@/component/common/Pagination.vue";

export default {
  name: 'Monitoring',
  components: {Pagination},
  data() {
    return {
      tableData: [
        {
          performanceName: "최고다! 호기심딱지 시즌3",
          venue: "성남공연장",
          performanceDate: "2025-03.26",
          session: "1회차",
          salesCompleted: "452",
          dbRegistered: true,
          dbRegistrationDate: "2025.03.24 12:23",
          status: true
        }
      ]

    }
  },
  methods: {
    moveDetail(row) {
      if (row.status) {
        this.$router.push('/monitoring/detail');
      }
    }
  }

}
</script>
