;(function () {
    'use strict';
    angular.module('app.constants', [])
        .constant('WS_URL', 'http://localhost:81/punto_de_venta/public/ws/')
        .constant('API_URL', 'http://localhost:81/punto_de_venta/public/api/')
        .constant('APP_URL', 'http://localhost:81/punto_de_venta/public/');

        // .constant('WS_URL', 'http://190.151.129.244/facturador/public/ws/')
        // .constant('API_URL', 'http://190.151.129.244/facturador/public/api/')
        // .constant('APP_URL', 'http://190.151.129.244/facturador/public/');
}());