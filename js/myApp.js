
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($filter) {
    this.data=[];
    var input_content = document.getElementById("item_content");
    this.search_data = [];

    this.addItem = function() {
        var itemContent = input_content.value.toString();
        var listItem = {"name":itemContent, "status":"Doing"};
        this.data.push(listItem);
        input_content.value="";
    };

    this.changeStatus = function(item) {
        item.status = 'Done';
    };

    this.deleteItem = function(item) {
        for(var tmpItem = 0; tmpItem < this.search_data.length; tmpItem++)
            if(this.search_data[tmpItem].name == this.data[item].name)
                this.search_data.splice(tmpItem,1);
        this.data.splice(item, 1);
    };

    this.deleteSearchItem = function(item) {
        for(var tmpItem = 0; tmpItem < this.data.length; tmpItem++)
            if(this.data[tmpItem].name == this.search_data[item].name)
                this.data.splice(tmpItem,1);
        this.search_data.splice(item, 1);
    };

    this.query = {};
    
    this.searchItem = function() {
        this.search_data = this.data;
        this.search_data = $filter('filter')(this.data, {'name' : this.query.name});
    };
});