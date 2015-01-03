/* Copyright 2015 PayPal */
"use strict";

var getDefaultEndpoint = exports.getDefaultEndpoint = function getDefaultEndpoint(mode) {
    return (typeof mode === "string" && mode === "live") ? "paypal.com" : "sandbox.paypal.com";
};

var getDefaultApiEndpoint = exports.getDefaultApiEndpoint = function getDefaultApiEndpoint(mode) {
    return 'api.' + getDefaultEndpoint(mode);
};

/* Merge Two Objects */
var merge = exports.merge = function merge(obj1, obj2) {
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if (obj2[p].constructor === Object) {
                obj1[p] = merge(obj1[p], obj2[p]);

            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            // Property in destination object not set; create it and set its value.
            obj1[p] = obj2[p];
        }
    }
    return obj1;
};

/* Updates obj1 attributes when in common with obj2 otherwise creates them */
var copyMissing = exports.copyMissing = function copyMissing(obj1, obj2) {
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if (obj2[p].constructor === Object) {
                if (!obj1[p]) {
                    obj1[p] = {};
                }

            } else if (!obj1[p]) {
                obj1[p] = obj2[p];

            }
        } catch (e) {
            // Property in destination object not set; create it and set its value.
            obj1[p] = obj2[p];
        }
    }
    return obj1;
};
