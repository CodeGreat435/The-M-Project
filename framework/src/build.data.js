(function (window, factory) {

    // AMD
    if (typeof define === 'function' && define.amd) {
        return define(['backbone', 'underscore', 'jquery', 'stickIt', 'tmpl'], factory);
    }

    // Browser globals.
    window.M = factory.call(window, window.Backbone, window._, window.$);


}(typeof global === "object" ? global : this, function (Backbone, _, $) {

    var M = (function( global, Backbone, _, $ ) {

        /**
         * Defines the general namespace
         *
         * @type {Object}
         */
        var M = {};

        // @include ./core/m.js
        // @include ./core/const.js
        // @include ./core/object.js
        // @include ./core/logger.js
        // @include ./core/view_manager.js
        // @include ./core/controller.js
        // @include ./core/application.js

        // @include ./utility/i18n.js
        // @include ./utility/objectid.js
        // @include ./utility/uuid.js
        // @include ./utility/base64.js
        // @include ./utility/sha256.js
        // @include ./utility/cypher.js

        // @include ./connection/request.js
        // @include ./connection/request_manager.js
        // @include ./connection/socket_io.js
        // @include ./data/field.js
        // @include ./data/entity.js
        // @include ./data/security.js
        // @include ./data/model.js
        // @include ./data/collection.js
        // @include ./data/data_selector.js
        // @include ./data/sql_selector.js
        // @include ./data/stores/store.js
        // @include ./data/stores/socket.js
        // @include ./data/stores/local_storage.js
        // @include ./data/stores/web_sql.js
        // @include ./data/stores/bikini_store.js


        return M;
    })(this, Backbone, _, $);

  return M;

}));