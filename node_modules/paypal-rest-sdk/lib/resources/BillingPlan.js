/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function billingPlan() {
    var baseURL = '/v1/payments/billing-plans/';
    var operations = ['create', 'get', 'list', 'update'];

    var ret = {
        baseURL: baseURL,
        activate: function activate(id, config, cb) {
            var activate_attributes = [
                {
                    "op": "replace",
                    "path": "/",
                    "value": {
                        "state": "ACTIVE"
                    }
                }
            ];
            api.executeHttp('PATCH', this.baseURL + id, activate_attributes, config, cb);
        }
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = billingPlan;
