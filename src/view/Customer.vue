<template>
  <div class="container-content">
    <div class="container-table">
      <div class="table-name">고객</div>
      <div class="p8 mt24 c4B465C fw500 fs16">검색</div>

      <div class="filter-text-filed">
        <el-input class="w103 h38 mr19" placeholder="고객명"></el-input>
        <el-input class="w542 h38 mr12" placeholder="검색어를 입력해주세요.">
          <template #prefix>
            <div class="search-icon"></div>
          </template>
        </el-input>
        <button class="common_btn w87 h40">검색</button>
      </div>

      <div class="filter-text-filed">
        <el-input class="w103 h38" placeholder="고객명"></el-input>
        <div class="w19"></div>
        <el-input class="w542 h38" placeholder="검색어를 입력해주세요.">
          <template #prefix>
            <div class="search-icon"></div>
          </template>
        </el-input>
        <div class="w12"></div>
        <button class="common_btn w87 h40">검색</button>
      </div>

      <div class="filter-input-group mt30 ">
        <button class="delete-btn">
          선택항목 삭제
        </button>
        <div class="row">
          <button class="excel-btn">
            엑셀 내려받기
          </button>
          <el-select placeholder="10개씩 보기"></el-select>
        </div>
      </div>


      <el-table class="mt24" :data="tableData" empty-text="검색결과가 없습니다." fit>
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
export default {
  name: "Customer"
}
</script>