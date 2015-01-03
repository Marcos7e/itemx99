/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');

function capture() {
    var baseURL = '/v1/payments/capture/';
    var operations = ['get', 'refund'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = capture;
