'use strict';


/**
 * Отменяет бронь билета на сеанс в кинотеатре, в категории бронирование.
 *
 * id Integer Идентификатор бронирования сеанса
 * no response value expected for this operation
 **/
exports.bookingDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Забронировать место в зале
 * Добавляет информацию в таблицу Бронирование
 *
 * body Booking_body_1  (optional)
 * returns inline_response_200_1
 **/
exports.bookingPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_booking" : "id_booking",
  "dateTame" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновлние информации о статусе бронирования
 * Обновляет информацию о статусе брони в категории Booking
 *
 * body Booking_body  (optional)
 * returns inline_response_200
 **/
exports.bookingPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_booking" : 0.8008281904610115,
  "dataTime" : "2000-01-23T04:56:07.000+00:00",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение информации о наличии мест в зале
 * Получает информацию о свободных местах из таблицы Места в зале
 *
 * id_session BigDecimal 
 * isFree Boolean  (optional)
 * returns inline_response_200_3
 **/
exports.seatsGET = function(id_session,isFree) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 6.027456183070403,
  "booking" : true,
  "price" : 0.8008281904610115,
  "id_seat" : "id_seat",
  "numberSeats" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновлние информации о времени сеанса
 * Обновляет информацию время сеанса в таблице Сеанс
 *
 * body Session_body  (optional)
 * returns inline_response_200_2
 **/
exports.sessionPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 6.027456183070403,
  "price" : 0.8008281904610115,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

