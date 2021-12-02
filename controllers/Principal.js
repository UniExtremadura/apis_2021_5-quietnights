'use strict';

var utils = require('../utils/writer.js');
var Principal = require('../service/PrincipalService');

module.exports.alarmaIdUsuarioIdAlertaPOST = function alarmaIdUsuarioIdAlertaPOST (req, res, next, idUsuario, idAlerta) {
  Principal.alarmaIdUsuarioIdAlertaPOST(idUsuario, idAlerta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
