var companies_service = angular.module('app.service.companies', ['app.constants']);

companies_service.service('CompaniesService', ['$http', 'WS_URL', function($http, WS_URL)  {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.index = function(){
        return $http.get(WS_URL+'companies');
    };

    this.store = function(params) {
        return $http.post(WS_URL+'companies', params);
    };

    this.update = function(params) {
        return $http.put(WS_URL+'companies/' + params.id, params);
    };

    this.destroy = function(id) {
        return $http.delete(WS_URL+'companies/' + id);
    };
}]);