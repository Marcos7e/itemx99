/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');

function payoutItem() {
    var baseURL = '/v1/payments/payouts-item/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = payoutItem;
