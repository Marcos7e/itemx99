/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

/**
 * Exposes REST endpoints for providing a customizing Paypal checkout
 * flow for users, supports features such as noshipping.
 *
 * https://developer.paypal.com/webapps/developer/docs/integration/direct/rest-experience-overview/
 */
function webProfile() {
    var baseURL = '/v1/payment-experience/web-profiles/';
    var operations = ['create', 'list', 'get', 'del', 'delete'];

    var ret = {
        baseURL: baseURL,
        update: function update(id, data, config, cb) {
            api.executeHttp('PUT', this.baseURL + id, data, config, cb);
        },
        replace: function replace(id, data, config, cb) {
            api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = webProfile;
