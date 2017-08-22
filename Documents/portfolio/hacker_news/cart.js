
angular.module('services.cart', [])
    .service('Cart', ['$rootScope', 'Reviewer', function ($rootScope, Reviewer) { 

        $rootScope.id = id;
        $rootScope.quantity = quantity

        //get cart
        var getCart = function(){               
               $rootScope.broadcast('getItem', function() {
                        if(typeof(Storage) !== "undefined") {
                                if(localStorage.getItem("cart")) {
                                        myCart = json.parse(localStorage.getItem('cart'));
                                       $rootScope.id = myCart.id;
                                        $rootScope.quantity = myCart.qty;
                                } else {
                                        alert("Your cart is empty");
                                }
                        }                       
               });
        };

        //add Item 
        var addItem = function(){           
                 $rootScope.broadcast("newItem", function() {
                        var item = $rootScope.id;
                        return item;
                })               
        };


        //add items 
        var addItems = function() {
                $rootScope.on('newItem', function() {
                        var newItem = [];
                        $rootScope.newItem.push(item); 
                })

                $rootScope.broadcast("saveItem", function() {
                        return newItem;
                })                
        };

        // save item
        var save = function() {
                $rootScope.on('saveItem', function() {                 
                       for (var i = 0; i < $rootScope.newItem; i++) {
                                $rootScope.id = $rootScope.newItem[i];
                       }
                }

                 $rootScope.broadcast('saveItem', function() {
                        return $rootScope.id;
                 }    
        };
 
        var remove = function (item) {
                $rootScope.broadcast("removeCart", function() {
                    $rootScope.quantity--;
                })
            };
 
        var clear = function(item) {
                $rootScope.broadcast("clearCart", function() {
                    $rootScope.id = "";
                    $rootScope.quantity = "";
                })
        };
 
        var persist = function() {
             $rootScope.on("refCart", function() {
                        var id = $rootScope.quantity;
                        var qty = $rootScope.quantity;
             });

            if(typeof(Storage) !== "undefined") {
                var myCart = {"id": id, "quantity" : qty}
                localStorage.setItem("Cart", json.stringify(myCart));
            }
        }
 
        var changeQuantity = function (){
                $rootScope.broadcast("addCart", function() {
                    $rootScope.quantity++;
                })
        };
 
        var refresh = function() {                
                  
        };   

    }]);
