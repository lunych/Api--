'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.bookingDELETE = function bookingDELETE (req, res, next, id) {
  Default.bookingDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookingGET = function bookingGET (req, res, next, id_card) {
  Default.bookingGET(id_card)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookingPOST = function bookingPOST (req, res, next, body) {
  Default.bookingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookingPUT = function bookingPUT (req, res, next, body) {
  Default.bookingPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cinema_hallGET = function cinema_hallGET (req, res, next, id_session, statusSeat) {
  Default.cinema_hallGET(id_session, statusSeat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymentGET = function paymentGET (req, res, next, id_card) {
  Default.paymentGET(id_card)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sessionPUT = function sessionPUT (req, res, next, body) {
  Default.sessionPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
