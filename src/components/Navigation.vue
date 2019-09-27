<template>
    <div>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/">
                <img alt="CSRanks" src="@/assets/logo.png" width="110" height="80">
                Cub Scout Pack 299
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav navbar-center">
                    <!-- <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li> -->
                    <li class="nav-item"><router-link to="/events" class="nav-link">Events</router-link></li>
                    <li class="nav-item"><router-link to="/formalities" class="nav-link">Formalities</router-link></li>
                    <li class="nav-item"><router-link to="/tools" class="nav-link">Tools</router-link></li>
                    <li class="nav-item"><router-link to="/communication" class="nav-link">Communication</router-link></li>
                </ul>
            </div>
        </nav>
      <!-- <router-view class="view"></router-view> -->
    </div>
</template>

<script>
</script>

<style> 
  /* .navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
} */
</style>