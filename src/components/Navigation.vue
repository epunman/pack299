<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand to="/"><img alt="CSRanks" src="@/assets/logo.png" width="110" height="80"> Cub Scout Pack 299</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="events">Events</b-nav-item>
            <b-nav-item to="formalities" >Formalities</b-nav-item>
            <b-nav-item to="tools" >Tools</b-nav-item>
            <b-nav-item to="communication" >Communication</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>


    <!-- <div class="navbar navbar-expand-lg navbar-dark bg-primary">
        <nav class="collapse navbar-collapse" id="navbarNav">
            <router-link to="/" class="navbar-brand"><img alt="CSRanks" src="@/assets/logo.png" width="110" height="80">   Cub Scout Pack 299</router-link>
            <ul class="navbar-nav navbar-center">
                <li class="nav-item"><router-link to="/events" class="nav-link">Events</router-link></li>
                <li class="nav-item"><router-link to="/formalities" class="nav-link">Formalities</router-link></li>
                <li class="nav-item"><router-link to="/tools" class="nav-link">Tools</router-link></li>
                <li class="nav-item"><router-link to="/communication" class="nav-link">Communication</router-link></li>
            </ul>
        </nav>
    </div> -->
</template>

<script>
</script>

<style> 
</style>