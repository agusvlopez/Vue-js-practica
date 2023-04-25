Vue.component('page-content', {
    template: `
    <div>
        <h1>Contenido de la página</h1>
        <p>{{message}}</p>
    </div>
    `
    ,
    props: ['message'],
    data: function() {
        return {
            message: 'Este es el mensaje desde un componente!',
        }
    },

    
});



const app = new Vue({
    el: '#contenedor',
    data: {
        modalLoginVisible: false,
        message: "Vamos a armar la aplicación en Vue" ,
        login: false,
        links: [
            {text: 'Home', url: '/home', enable: true, active: true, id: 1},
            {text: 'Mi perfil', url: '/perfil', enable: false, active: false, id: 2},
            {text: 'Configuracion', url: '/config', enable: false, active: false, id: 3},
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

        toogleLogin() {
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
        },
        
    
        clickSeccionNav () {
           
            for(this.link of this.links){
                
            if(!this.link.active) {
                this.link.active = this.link.active;
            }

            this.link.active = !this.link.active
            }
            
        }
    }
});