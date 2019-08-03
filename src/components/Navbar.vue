<template>
    <!-- TopNav -->
    <div>
        
        <div class="navbar-fixed">
            <nav class="nav-wrapper grey lighten-4 transparent no-shadows">
                <div class="container">
                    <a href="#" class="brand-logo hide-on-med-and-down"><img src="/logo_new.svg" width="50" height="auto"></a>
                    <a href="#" class="brand-logo hide-on-large-only"><img src="/mobile_logo_new.svg" width="auto" height="45"></a>
                    
                    <a href="#" class="sidenav-trigger" data-target="mobile-links">
                        <i class="material-icons grey-text text-darken-5">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <!-- <li v-for="link in links" :key="link.text" router :to="link.route">{{link.text}}</li> -->
                        <li><router-link to="/"><span class="grey-text text-darken-4">主页</span></router-link></li>
                        <li><router-link to="/events"><span class="grey-text text-darken-4">校园活动</span></router-link></li>
                        <li><router-link to="/concerts"><span class="grey-text text-darken-4">专场演出</span></router-link></li>
                        <li><router-link to="/15years"><span class="grey-text text-darken-4">15周年纪念</span></router-link></li>
                        <li><router-link to="/join"><span class="grey-text text-darken-4">加入我们</span></router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- SideNav -->
        <ul class="sidenav" id="mobile-links">
            <li><router-link to="/"><i class="material-icons">home</i>主页</router-link></li>
            <li><router-link to="/events"><i class="material-icons">event</i>校园活动</router-link></li>
            <li><router-link to="/concerts"><i class="material-icons">library_music</i>专场演出</router-link></li>
            <li><router-link to="/15years"><i class="material-icons">whatshot</i>15周年纪念</router-link></li>
            <li><router-link to="/join"><i class="material-icons">group_add</i>加入我们</router-link></li>
        </ul>

         
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            links: [
                { text: 'Home', route: '/'},
                { text: 'Concerts', route: '/concerts'},
                { text: 'Events', route:'/events'},
                { text: '15-year Special', route:'/15years'},
                { text: 'Join', route:'/join'}
            ]
        }
    }
}
</script>

<script>
$(document).ready(function(){
      $('.sidenav').sidenav();
    });
</script>

<style>
    .no-shadows {
    box-shadow: none!important;
}
</style>


