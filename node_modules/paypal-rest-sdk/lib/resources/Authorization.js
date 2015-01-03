/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function authorization() {
    var baseURL = '/v1/payments/authorization/';
    var operations = ['get', 'capture'];

    var ret = {
        baseURL: baseURL,
        void: function voidAuthorization(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/void', {}, config, cb);
        },
        reauthorize: function reauthorize(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/reauthorize', data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = authorization;
