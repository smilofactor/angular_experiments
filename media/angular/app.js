(function() {

var app = angular.module('ngExp', ['store-products']);

app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    //$http.get('media/angular/products_list.json').success(function(data){
    $http.get('media/angular/store-products.json').success(function(data){
        store.products = data;
    });

}]);


/*
app.controller('StoreController', function() {
      this.products = gems;

});
*/


app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
    };
});


app.directive('productDescription', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-description.html'
    };
});


app.directive('productSpecs', function() {
    return {
        restrict: 'A',
        templateUrl: 'product-specs.html'
    };
});

app.directive('productReviews', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-reviews.html'
    };
});


/*
app.directive('productGallery', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-gallery.html',
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber) {
          this.current = imageNumber || 0;
          }
        },
        controllerAs: 'gallery'
    };
});


app.directive('productPanels', function() {
    return{
        restrict: 'E',
        templateUrl: 'product-panels.html',
        controller: function() {
          this.tab = 1;

          this.selectTab = function(setTab) {
            this.tab = setTab;
          };

          this.isSelected = function(checkTab) {
            return this.tab === checkTab;
          };
      },
        controllerAs: 'panel'
    };
});
*/

})();
