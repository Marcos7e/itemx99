/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');

function sale() {
    var baseURL = '/v1/payments/sale/';
    var operations = ['get', 'refund'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = sale;
