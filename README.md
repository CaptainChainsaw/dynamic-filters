# Dynamic Filters

This directive allows you to easily create filters that the user can create themselves.  

Before going any further with this, here's an example to demonstrate how it works:
http://plnkr.co/edit/NfQPBasnnakMuHbKHczq?p=preview


# Usage

Firstly include the directive on the page:

```sh
<dynamic-filters filters-array="filters" search-object="search"></dynamic-filters>

```

In order to filter on a data source the directive will need included within a controller which has access to the data, in this case our resultsCtrl controller.  It is then simply a case of iterating over the data and including the filter on the ng-repeat:

```sh
<div ng-controller="resultsCtrl">
    <dynamic-filters filters-array="filters" search-object="search"></dynamic-filters>
    <div ng-repeat="person in persons | filter: search">
      {{person.name}}
    </div>
</div>
```

We now need to set up our controller.  The controller should have the data source within it, in this example it is hard coded.  Normally this would come from a backend JSON source.  We also need to define certain scope variables within this controller.  This is an example of what it should look like:

```sh
angular.module('app', ['dynamicFiltersDirective'])

.controller('resultsCtrl', function($scope){
   $scope.filters = [{id: 'filter1'}];
   $scope.search = {};

        // our data to be filtered on
	    $scope.persons = [{
          name: 'Jim',
         	age: 21,
          customerId: 1,
          productId: 4
      },{
          name: 'Frank',
         	age: 20,
          customerId: 2,
          productId: 4
      },{
          name: 'Bob',
         	age: 20,
          customerId: 3,
          productId: 5
      },{
          name: 'Bill',
         	age: 20,
          customerId: 3,
          productId: 5
      }];
	});
```

# Things to note

If the same option has been selected more than once and then the minus button is clicked to remove one of these filters, all filters using that option will be removed from the filtering of results.

If you select the same option more than once then the value for all these options will be updated when changing the values.  This is because they use the same model.

# Todo

1 - prevent duplicate options from being selected


I hope this is enough to get going with it.  Enjoy!

-CaptainChainsaw

