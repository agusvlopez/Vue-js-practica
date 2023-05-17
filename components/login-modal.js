Vue.component('login-modal', {
    template: `
    <div v-if="modalLoginVisible" class="modal" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title">Iniciar sesión</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Ingrese su contraseña</p>
            <input type="password" v-on:keyup.enter="loginOnServer" >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModalLogin">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="loginOnServer">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
    `,

    props: ['modalLoginVisible', 'cerrarModalLogin', 'iniciarSesion'],
    
    methods: {
      loginOnServer: function(){

        new Promise((success, error) => {

          setTimeout(() => {
            success();
          },2000);
        })

          .then(() => {

            console.log("Estamos autenticando al usuario en el servidor");
            this.iniciarSesion();
            this.$emit("authenticated", true);
          })

          .catch(() => {
            console.log("No se pudo autenticar el usuario");
            this.$emit("authenticated", false);
          }
          )
      
      }
    },
    
    data: function(){
        return {

        }
    }
})

