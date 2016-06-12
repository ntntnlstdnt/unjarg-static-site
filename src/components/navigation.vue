<template>
  <div class="row">
    <div class="navbar-spacer"></div>
    <div class="twelve columns">
      <nav class="navbar">
        <div class="container">
          <ul>
            <li class="navbar-link"><a v-link ="{ path: '/mathematics'}">Mathematics</a></li>
            <li class="navbar-link"><a v-link ="{ path: '/statistics'}">Statistics</a></li>
            <li class="navbar-link"><a v-link ="{ path: '/home'}">Home</a></li>
            <li class="navbar-link"><a v-link ="{ path: '/engineering'}">Engineering</a></li>
            <li class="navbar-link"><a v-link ="{ path: '/physics'}">Physics</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
nav ul {
  list-style: none;
}

nav li {
  margin-bottom: 0;
  display: inline-block;
}

.navbar{
  display: block;
  width: 100%;
  height: 6.5rem;
  background: #fff;
  z-index: 99;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.navbar-link {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .2rem;
  margin-right: 35px;
  text-decoration: none;
  line-height: 6.5rem;
  color: #222;
}
</style>
