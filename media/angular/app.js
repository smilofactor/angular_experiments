(function() {

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
    reviews: [ ],
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

var app = angular.module('ngExp', []);
app.controller('StoreController', function() {
      this.products = gems;

  });

app.controller("PanelController", function() {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };

  });

})();