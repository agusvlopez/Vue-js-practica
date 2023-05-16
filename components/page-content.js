Vue.component('page-content', {
    template: `
    <div class="pageContent">
        <h1 class="pageContent__title">{{title}}</h1>
        <p class="pageContent__text">{{message}}</p>
    </div>
    `
    ,
    props: ['title','message'],
    data: function() {
        return {
        }
    },

    
});


