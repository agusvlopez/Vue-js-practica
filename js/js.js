const app = new Vue({
    el: '#contenedor',
    data: {
        login: true,
        links: [
            {text: 'Home', url: '/home', enable: true},
            {text: 'About', url: '/about', enable: false},
            {text: 'Contact', url: '/contact', enable: true},
        ]
    }
});