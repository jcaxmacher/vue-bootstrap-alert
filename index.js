var Vue = require('vue');

module.exports = Vue.extend({
    template: require('./template'),
    replace: true,
    data: {
        closeable: true,
    },
    ready: function() {
        if (this.timeout) {
            setTimeout(function() {
                this.$destroy();
            }.bind(this), this.timeout);
        }
    },
    methods: {
        close: function() {
            this.$destroy();
        }
    }
});
