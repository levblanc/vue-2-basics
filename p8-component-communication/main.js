var bus = new Vue()

Vue.component('toggle-btn', {
    template: '\
        <button \
            class="btn btn-info" \
            v-on:click="emmitToggle">Toggle Box</button>\
    ',
    methods: {
        emmitToggle: function() {
            this.$emit('toggle-box')
            console.log('toggle-btn clicked!')
            // bus.$emit('toggle-box')
        }
    }
})

Vue.component('listener', {
    template: '<h5>sibling component</h5>',
    mounted: function () {
        bus.$on('toggle-box', function () {
            alert('已经接收到toggle-box信号！')
        })
    }
})

var app = new Vue({
    el: '#app',
    data: {
        showBox: true
    },
    methods: {
        toggleBox: function() {
            this.showBox = !this.showBox
        }
    }
})
