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
        <el-input class="w103 h38 mr19" placeholder="직역명"></el-input>
        <el-input class="w542 h38 mr12" placeholder="검색어를 입력해주세요.">
          <template #prefix>
            <div class="search-icon"></div>
          </template>
        </el-input>
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
        <el-table-column type="selection" min-width="55"></el-table-column>
        <el-table-column label="No" width="55">
          <template #default="{ $index }">
            {{ $index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="venue" label="이름" min-width="150">
          <template #default="{ row }">
            {{ row.name }}
          </template>
        </el-table-column>

        <el-table-column prop="date" label="핸드폰번호" min-width="180">
          <template #default="{ row }">
            {{ row.phoneNumber }}
          </template>
        </el-table-column>

        <el-table-column prop="session" label="등록일" min-width="180">
          <template #default="{ row }">
            {{ row.registrationDate }}
          </template>
        </el-table-column>

        <el-table-column prop="host" label="구매처" min-width="180">
          <template #default="{ row }">
            {{ row.purchaseSource }}
          </template>
        </el-table-column>

        <el-table-column prop="memo" label="최근접속일" min-width="316">
          <template #default="{ row }">
            {{ row.lastLoginDate }}
          </template>
        </el-table-column>

        <el-table-column prop="createdAt" label="최근 관람 공연" min-width="150">
          <template #default="{ row }">
            {{ row.lastShow }}
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="지역" min-width="150">
          <template #default="{ row }">
            {{ row.region }}
          </template>
        </el-table-column>

        <el-table-column prop="status" label="상세보기" min-width="150">
          <template #default="{ row }">
            <button class="common_btn w52">상세</button>
          </template>
        </el-table-column>

      </el-table>
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  data(){
    return {
      tableData : [
        {

          name: '오상용',
          phoneNumber: '010-9985-5624',
          registrationDate: '2025.03.24',
          purchaseSource: '인터파크티켓',
          lastLoginDate: '2025.03.24 12:23',
          lastShow: '최고다! 호기심딱지 뮤지컬',
          region: '성남',
        }
      ]
    }
  }
}
</script>