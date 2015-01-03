/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function order() {
    var baseURL = '/v1/payments/orders/';
    var operations = ['get', 'capture'];

    var ret = {
        baseURL: baseURL,
        void: function voidOrder(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/do-void', {}, config, cb);
        },
        authorize: function authorize(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/authorize', data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = order;
