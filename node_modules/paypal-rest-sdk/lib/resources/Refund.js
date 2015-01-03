/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');

function refund() {
    var baseURL = '/v1/payments/refund/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = refund;
