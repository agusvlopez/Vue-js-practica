const app = new Vue({
    el: '#contenedor',
    data: {
        message: "Vamos a probar el uso de eventos en vivo" ,
        login: false,
        links: [
            {text: 'Home', url: '/home', enable: true},
            {text: 'Mi perfil', url: '/perfil', enable: false},
            {text: 'Configuracion', url: '/config', enable: false},
        ]
    },
    methods: {
       
        cerrarSesion() {
            this.login = false;
        },
        iniciarSesion() {
            this.login = true;
        },

        envioInfo() {
            console.log("Se ha enviado información")
        }
    }
});