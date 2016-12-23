Vue.component('game-list', {
    template: '<div><game-item v-for="item in games">{{ item.name }}</game-item></div>',
    data: function () {
        return {
            games: window.games
        }
    }
})

// Vue.component('game-item', {
//     template: '<li><slot></slot><li>'
// })

Vue.component('game-item', {
    render: function (createElement) {
        return createElement(
            'li',
            this.$slots.default
        )
    }
})

new Vue({
    el: '#app'
})
