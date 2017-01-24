Vue.component('page', {
    template: '\
        <div v-show="selected">\
            <slot></slot>\
        </div>\
    ',
    props: {
        name: { required: true },
        link: { required: true },
        active: { default: false }
    },
    data: function () {
        return {
            selected: false
        }
    },
    computed: {
        hashLink: function () {
            return '#' + this.link
        }
    },
    mounted: function () {
        this.selected = this.active
    }
})

Vue.component('page-nav', {
    template: '\
        <div>\
            <div class="btn-group btn-group-justified" role="group">\
                <a class="btn" \
                    v-for="page in pages"\
                    :href="page.hashLink" \
                    :class="{\'btn-default\': !page.selected, \'btn-info\': page.selected }"\
                    @click="selectNav(page)">\
                    {{ page.name }}\
                </a>\
            </div>\
            <div class="page-detail">\
                <slot></slot>\
            </div>\
        </div>\
    ',
    data: function () {
        return {
            pages : [],
            // btnStyles: {
            //     'btn-default': !page.selected,
            //     'btn-info': page.selected
            // }
        }
    },
    methods: {
        selectNav: function (page) {
            this.pages.forEach(function (item, index) {
                item.selected = (item.name === page.name)
            })
        }
    },
    created: function () {
        // console.log(this.$children)
        this.pages = this.$children
    }
})

var app = new Vue({
    el: '#app'
})
