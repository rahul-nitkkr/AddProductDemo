var app = angular.module('addProductCategory',[]);
app.controller('addProdCatController',function($scope,$http){
 //Variable Declaration
    $scope.attributes=[];
    $scope.types=['String','Numeric','Date'];
    
   //Add Attribute 
    $scope.addAttribute=function() {
        $scope.showVal=true;
      };
      
     //Save Attribute
        $scope.saveAttribute=function() {
       $scope.attributes.push($scope.attr);
       $scope.attr="";
       $scope.showVal=false;
       console.log($scope.attributes);
      };
      
      //Persiste Data and push to servlet
      $scope.persistdata=function (){
          $http({
              url:'AddProdCategory/'+ $scope.category,
              method:"POST",
              data: $scope.attributes
          }).success(function(data,status,config,header){
              alert(data);
              console.log(data);
              console.log(status);
              
          }).error(function(data,status,config,header){
             console.log(data);
              console.log(status);
              
          });          
      };
});


