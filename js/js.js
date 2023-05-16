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

    mounted(){
      const isLogin = JSON.parse(localStorage.getItem('login'));
      const message = localStorage.getItem('message');
      if(message) {
        this.message =  message;
      }
      if(isLogin) {
        this.login = true;
      }
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
            localStorage.setItem('login','true');
            this.cerrarModalLogin();
         
        //cada vez que inicie sesion...
        localStorage.setItem('message', "Estoy cambiando el mensaje");
        },

        toogleLogin() {
            if(!this.login){ // si no esta logueado
              
                this.mostrarModalLogin();
               
            }else {   // si esta logueado... cierro sesion
                localStorage.setItem('login','false');
                this.login = false;
            }
            
            
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