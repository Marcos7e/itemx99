/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function payment() {
    var baseURL = '/v1/payments/payment/';
    var operations = ['create', 'get', 'list'];

    var ret = {
        baseURL: baseURL,
        execute: function execute(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/execute', data, config, cb);
        }
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = payment;
