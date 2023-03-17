<template>
  <div class="navbar navbar-brand align-items-center h-45px mb-1">
    <div class="nav-item col">
      <div class="input-group">
        <input class="form-control " type="search" placeholder="在此搜索" aria-label="Search"
               data-bs-toggle="dropdown"
               aria-expanded="false" id="globalSearch">
        <ul class="dropdown-menu " aria-labelledby="globalSearch">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">查看更多结果</a></li>
        </ul>
        <button class="btn w-auto btn-danger rounded " type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search svg-icon "
               viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>搜索
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SearchGroup"
}
</script>

<style scoped>

</style>