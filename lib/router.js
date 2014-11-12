var page = require('page');
var bulk = require('bulk-require');
var Vue = require('vue');

// Views
var viewsById = bulk(__dirname + '/../views', '**/*.js');

var views = [];
for (var folder in viewsById) {
    if (viewsById.hasOwnProperty(folder)) {
        views.push(viewsById[folder]);
    }
}

views.forEach(function (view) {
    Vue.component(view.id, view);
});

module.exports = function () {
    var self = this;

    page(function (ctx, next) {
        console.log(ctx);
        self.params = ctx.params;
        next();
    });

    // Register
    views.forEach(function (view) {
        page(view.route, function () {
            console.log('Setting current view to ' + view.route);
            self.currentView = view.id;
        });
    });

    setTimeout(function () {
        page({
            click: true,
            popstate: true
        });
    }, 250);

};
