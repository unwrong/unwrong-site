'use strict';

/* Services */

class Phone {
    public init($resource) {
        return $resource('projects/:projectId.json', {}, {
            query: { method: 'GET', params: { projectId: 'projects' }, isArray: true }
        });
    }
}

var phone: Phone = new Phone();

var phonecatServices:ng.IModule = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource', phone.init]);
