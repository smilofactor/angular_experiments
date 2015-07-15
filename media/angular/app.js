(function() {


var app = angular.module('ngExp', ['store-products']);
app.controller('StoreController', function() {
      this.products = gems;

  });


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

var gems = [
    { 
    name: 'Azurite',
    price: 110.95,
    description: 'Some gems have hidden qualities beyond their luster',
    shine: 8,
    rarity: 7,
    color: '#ccc',
    faces: 14,
    canPurchase: true,
    soldOut: false,
    images: [
    ],
    reviews: [{
    stars: 4,
    body: "BBW: High shine != high quality",
    author: "LouisW407@example.org",
    createdOn: 1397490980837
    },
    {
    stars: 3,
    body: "Too much money",
    author: "turtules@turles.org",
    createdOn: 1397490980837
    }],
    },
    {
    name: 'Pentagonal Gem',
    price: 3.95,
    description: 'This one is a pentagonal sided gem',
    shine: 5,
    rarity: 7,
    color: '#5d3',
    faces: 5,
    canPurchase: false,
    soldOut: true,
    images: [ ],
    reviews: [ ],
    },
    {
    name: 'Dodecahedron',
    price: 4.95,
    description: '. . . .',
    canPurchase: true,
    images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
    ],
    }
];

})();
