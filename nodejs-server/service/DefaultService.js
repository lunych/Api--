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
 * Обновление информации о бонусной карте при бронировании
 * Обновляет информацию о бонусной карте пользователя,как часто пользователь пользуется картой.
 *
 * id_card Integer 
 * returns inline_response_200
 **/
exports.bookingGET = function(id_card) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_booking" : "id_booking"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Забронировать место в зале
 * Добавляет информацию в таблицу Бронирование
 *
 * body Booking_body_1  (optional)
 * returns inline_response_200_2
 **/
exports.bookingPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_booking" : 0,
  "ball" : 6,
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
 * returns inline_response_200_1
 **/
exports.bookingPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_booking" : 0,
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
 * Получает информацию о свободных местах из таблицы cinema_hall
 *
 * id_session BigDecimal 
 * statusSeat Boolean  (optional)
 * returns inline_response_200_4
 **/
exports.cinema_hallGET = function(id_session,statusSeat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 6.027456183070403,
  "booking" : 1,
  "price" : 0.8008281904610115,
  "id_seat" : "id_seat",
  "numberSeats" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение информации об оплате за билет по баллам бонусной карты
 * Получение информации какую часть стоимости билетов клиенты оплачивают баллами
 *
 * id_card Integer 
 * returns inline_response_200_5
 **/
exports.paymentGET = function(id_card) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 1,
  "amount_ball" : 6.027456183070403,
  "id_Payment" : 0
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
 * returns inline_response_200_3
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

