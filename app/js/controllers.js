var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

var filename = 'Users/ez9115/NetBeansProjects/CuraeApp/app/js/data.json';
//saveJSONData(data,fileName);

//All Files	/Users/ez9115/NetBeansProjects/CuraeApp/app/js/data.json


/*var data1 = getJSON('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=Patient/1&_format=json').then(function(data) {
    alert('Your Json result is:  ' + data.entry[0].resource.gender); //you can comment this, i used it to debug

    result.innerText = data.entry[0].resource.gender; //display the result in an HTML element
}, function(status) { //error detection....
  alert('Something went wrong.');

});*/





var patientControllers = angular.module('patientControllers', []);

var patientControllers = angular.module('patientControllers', []);

patientControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
        
        
var saveJSONData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
        
//$http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_format=json&_pretty=true').success(function(data) {
  $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=81&_format=json').success(function(data) {   
//getJSON('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_format=json&_pretty=true').then(function(data) {
  console.log("data:"+data.entry);
    var filename = 'Users/ez9115/NetBeansProjects/CuraeApp/app/js/data.json';
//saveJSONData(data,filename);
    $scope.patients = data.entry;
    $scope.patientOrder = 'name';
//alert('%%%% After Your Json result is:  ' + data.entry[0].resource.birthDate)
  });
}]);

patientControllers.controller('DetailsController', ['$scope','$http','$routeParams',
      function ($scope, $http, $routeParams){
   //$http.get('js/data1.json').success(function(data){
   //$http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_format=json&_pretty=true').success(function(data){
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=81&_format=json').success(function(data) {
          $scope.patients = data.entry;
   $scope.whichItem=$routeParams.itemId;
   if ($routeParams.itemId>0){
       $scope.prevItem=Number($routeParams.itemId)-1;
   }else {
       $scope.prevItem = $scope.patients.length -1;
   }
   if($routeParams.itemId < $scope.patients.length -1) {
       $scope.nextItem = Number($routeParams.itemId) +1;
   }else {
       $scope.nextItem = 0;
   }
   /// the below pulls up the data for a patient with diabetes by looking at the loinc code and saves the data to patients1
   // can use the below template to pull any data, just copy and paste within this controller, just remember to change 
   // the data variable to something like data2, and the patient varitable to something like patients2
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?code=17856-6&patient=' +data.entry[0].resource.id+ '&_format=json').success(function(data1) {
          $scope.patients1 = data1.entry;
   $scope.whichItem1=$routeParams.itemId;
   });
   //17856-6 - loinc code for A1c
   });
  
}]);  


}]);
