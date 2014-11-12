var Vue = require('vue');

var router = require('./router');
var tags = require('./tags');


var app = new Vue({
    el: '#app',
    data: {
        isLoading: true,
        currentView: 'home',
        params: null,
        user: {}
    },
    created: function () {
        var self = this;
        router.call(self);
        self.$data.user = {
            username: 'jon',
            location: 'Toronto, Canada',
            timezone: 'GMT+500'
        };
    },
    ready: function () {
        var self = this;
        global.setTimeout(function () {
            self.isLoading = false;
        }, 1000);
        global.setTimeout(function () {
            self.$data.user = {
                username: 'kate',
                location: 'Toronto, Canada',
                timezone: 'GMT+500'
            }
            tags.push('dasdasdasd');
            console.log('user updated!');
        }, 2000);
    }
});
