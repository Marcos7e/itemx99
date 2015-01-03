/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function payout() {
    var baseURL = '/v1/payments/payouts/';
    var operations = ['get'];

    function create(id, sync_mode, config, cb) {
        api.executeHttp('POST', baseURL);
    }

    var ret = {
        baseURL: baseURL,
        create: function create(data, sync_mode, config, cb) {
            cb = (typeof sync_mode === 'function') ? sync_mode : cb;
            sync_mode = (typeof sync_mode === 'string' && sync_mode === 'true') ? 'true' : 'false';
            api.executeHttp('POST', this.baseURL + "?" + "sync_mode=" + sync_mode, data, config, cb);
        }
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = payout;
