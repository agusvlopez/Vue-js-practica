const PASSWORD = "1234";

Vue.component('login-modal', {
    template: `
    <div v-if="modalLoginVisible" class="modal" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title">Iniciar sesión</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <form @submit.prevent="loginOnServer">
          <div class="modal-body">
            <p>Ingrese su contraseña</p>
            <input type="password" v-model="password">
          </div>

          <div class="pt-1 pb-2 ps-3 pe-3">
          <p>Para poder continuar debe aceptar las politicas de privacidad y los términos y condiciones</p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="policies" id="flexCheckDefault" v-model="legals">
            <label class="form-check-label" for="flexCheckDefault">
            Politicas de privacidad
           </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="terms" id="flexCheckChecked" v-model="legals">
            <label class="form-check-label" for="flexCheckChecked">
            Términos y condiciones
            </label>
          </div>
          </div>

          <div class="modal-errors mt-3">
            <div v-for="error in errors" class="alert alert-danger rounded-0" role="alert">
            {{error}}
            </div>
          </div>

         
          <div class="modal-footer">
          <input type="submit" value="Iniciar sesión" class="btn btn-primary" :disabled="loginIsDisabled">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModalLogin">Cancelar</button>
          </div>
          </form>

        </div>
      </div>
    </div>
    `,

    props: ['modalLoginVisible', 'cerrarModalLogin', 'iniciarSesion'],

  //computed... se comporta como una funcion pero es una variable, tiene la forma de un método pero cuando lo uso lo implemento como si fuera una variable
    computed: {
      loginIsDisabled: function(){
        return this.legals.length !== 2
      }
    },

    data: function(){
      return {
        errors: [],
        legals: [],
        password: ""
      }
    },

    
    methods: {
      loginOnServer: function(){
        this.errors = [];
         //verificamos que el password sea correcto
         if(this.password !== PASSWORD){
          this.errors.push("La contraseña es incorrecta");
          return;
         }
          new Promise((success, error) => {

          setTimeout(() => {
            success();
          },1000);
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
    

})

