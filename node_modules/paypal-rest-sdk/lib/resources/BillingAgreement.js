/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function billingAgreement() {
    var baseURL = '/v1/payments/billing-agreements/';
    var operations = ['create', 'get', 'update', 'cancel'];

    function searchTransactions(id, start_date, end_date, config, cb) {
        var date_range = {
            "start_date": start_date,
            "end_date": end_date
        };
        api.executeHttp('GET', baseURL + id + '/transactions', date_range, config, cb);
    }

    function billBalance(id, data, config, cb) {
        api.executeHttp('POST', baseURL + id + '/bill-balance', data, config, cb);
    }

    function setBalance(id, data, config, cb) {
        api.executeHttp('POST', baseURL + id + '/set-balance', data, config, cb);
    }

    var ret = {
        baseURL: baseURL,
        execute: function execute(token, data, config, cb) {
            api.executeHttp('POST', this.baseURL + token + '/agreement-execute', data, config, cb);
        },
        suspend: function suspend(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/suspend', data, config, cb);
        },
        reactivate: function reactivate(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/re-activate', data, config, cb);
        },
        billBalance: billBalance,
        setBalance: setBalance,
        searchTransactions: searchTransactions,
        //entries below are deprecated but provided for compatibility with 0.* versions
        bill_balance: billBalance,
        set_balance: setBalance,
        search_transactions: searchTransactions
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = billingAgreement;
