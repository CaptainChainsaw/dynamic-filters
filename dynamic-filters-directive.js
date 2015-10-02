angular.module('dynamicFiltersDirective', [])
.directive('dynamicFilters', function() {
  return {
    restrict: 'AE',  
    scope: {
             filtersArray: '=',
             searchObject: '='
    },

    link: function(scope) {

      scope.addFilter = function() {
        var newItemNo = scope.filtersArray.length+1;
        scope.filtersArray.push({'id':'filter'+newItemNo});
      };
    
      scope.removeFilter = function(option) {
        var lastItem = scope.filtersArray.length-1;
        scope.filtersArray.splice(lastItem);
        delete scope.searchObject[option];
      };    
      
      scope.updateFilters = function (model) {
        scope.searchObject[model];
      }
      
    },
    templateUrl: 'filtertemplate.html'
  }
});