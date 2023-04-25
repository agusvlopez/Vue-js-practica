Vue.component('page-content', {
    template: `
    <div>
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
    `
    ,
    props: ['title','message'],
    data: function() {
        return {
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
        ],
        articles: [
            {
                title: 'Perro',
                message: 'El perro se llama Rocco'
            },

            {
                title: 'Gato',
                message: 'El gato se llama Rocco'
            },

            {
                title: 'Pez',
                message: 'El pez se llama Rocco'
            }
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