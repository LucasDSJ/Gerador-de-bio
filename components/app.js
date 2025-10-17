const app = Vue.createApp({
    components: {
        'navbar-component': NavbarComponent,
        'footer-component': FooterComponent
    }
});
app.mount('#app');