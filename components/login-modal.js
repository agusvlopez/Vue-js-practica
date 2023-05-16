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
            <input type="password" v-on:keyup.enter="iniciarSesion" >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModalLogin">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="iniciarSesion">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
    `,

    props: ['modalLoginVisible', 'cerrarModalLogin', 'iniciarSesion'],
    data: function(){
        return {

        }
    }
})

