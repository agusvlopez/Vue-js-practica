const app = new Vue({
    el: '#contenedor',
    data: {
        modalLoginVisible: false,
        message: "Vamos a armar la aplicación en Vue" ,
        login: false,
        links: [
            {text: 'Home', url: '/home', enable: true},
            {text: 'Mi perfil', url: '/perfil', enable: false},
            {text: 'Configuracion', url: '/config', enable: false},
        ]
    },
    methods: {
        mostrarModalLogin () {
            this.modalLoginVisible = true;
        },

        cerrarModalLogin () {
            this.modalLoginVisible = false;
        },

        iniciarSesion() {
            this.login = true;
             this.cerrarModalLogin();
         },

        toggleLogin() {
            if(!this.login){
                this.mostrarModalLogin();
            }
            this.login = !this.login
            
        },
       
        envioInfo() {
            console.log("Se ha enviado información")
        },
        
        probandoKeyUp () {
            alert("apretaste el enter")
        },

        agregarMiPerfil () {
            const miPerfil = {text: 'Mi perfil', url: '/perfil', enable: true};
            this.links.push(miPerfil);
            
        },
        sacarMiPerfil () {
            this.links.splice(1,1);
        }
    }
});