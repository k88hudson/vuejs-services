var Vue = require('vue');
var tags = require('../../lib/tags');

module.exports = {
    id: 'profile',
    route: '/profile',
    template: require('./index.html'),
    methods: {
        page: require('page')
    },
    data: function () {
        return {
            tags: tags
        };
    },
    computed: {
        user: function () {
            return this.$root.user;
        }
    }
};
