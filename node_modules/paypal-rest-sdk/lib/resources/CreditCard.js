/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');

function creditCard() {
    var baseURL = '/v1/vault/credit-card/';
    var operations = ['create', 'get', 'update', 'del', 'delete'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = creditCard;
