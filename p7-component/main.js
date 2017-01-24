// Step 1
Vue.component('one', {
    template: '<li>这是一个item</li>'
})

// Step 2
Vue.component('two', {
    template: '<li>{{ listItem.name }}</li>',
    data: function () {
        return {
            listItem: window.games[0]
        }
    }
})

// Step 3
Vue.component('three', {
    template: '<li><slot></slot></li>'
})

// Step 4
Vue.component('four', {
    template: '<li><slot>默认内容</slot></li>'
})

// Step 5
Vue.component('five', {
    template:   '<div>\
                    <div class="top-nav">\
                        <slot name="header"></slot>\
                    </div>\
                    <div class="main">\
                        <slot name="content"></slot>\
                    </div>\
                </div>'
})

// Step 6
Vue.component('six', {
    props: ['userName'],
    // template: '<li>{{ userName }}</li>',
    template: '<li>{{ uppercaseName }}</li>',
    computed: {
        uppercaseName: function() {
            return this.userName.trim().toUpperCase()
        }
    }
})

// Step 7
Vue.component('game-list', {
    template:   '<ul>\
                    <three v-for="game in games">{{ game.name }}</three>\
                </ul>',
    data: function () {
        return {
            games: window.games
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        inputMsg: ''
    }
})
