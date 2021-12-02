'use strict';


/**
 * Permite lanzar la alarma correspondiente con los parámetros de entrada
 *
 * idAlarma BigDecimal El id de la Alarma
 * idAlerta BigDecimal El id de la Alerta
 * returns List
 **/
exports.alarmaIdAlarmaIdAlertaPOST = function(idAlarma,idAlerta) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idAlarma" : 1,
  "idAlerta" : 1
}, {
  "idAlarma" : 1,
  "idAlerta" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

