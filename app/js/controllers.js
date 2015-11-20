var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

var filename = 'Users/ez9115/NetBeansProjects/CuraeApp/app/js/data.json';

//All Files	/Users/ez9115/NetBeansProjects/CuraeApp/app/js/data.json

var patientControllers = angular.module('patientControllers', []);

var patientControllers = angular.module('patientControllers', []);

//

patientControllers.controller('ListController', ['$scope','$rootScope', '$http', function($scope,$rootScope, $http) {
        
        
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
      $rootScope.id = 6  

        $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_format=json').success(function(data) {   

$http.get('js/data66.json').success(function(data10){
$rootScope.patients1 = data10;
//$rootScope.data33 = patients1;
    $scope.patientOrder = 'name';
    $rootScope.choice = itemId;
   $rootScope.ismale = "no";
   

  
          });
  });
}]);

patientControllers.controller('DetailsController', ['$scope','$rootScope','$http','$routeParams',
      function ($scope,$rootScope, $http, $routeParams){
  
         $rootScope.y = "#/nodiabetes"
         
  $rootScope.x = $routeParams.itemId;        
          
          $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id='+$rootScope.patients1[$routeParams.itemId].id+'&_format=json').success(function(data11) {
          $rootScope.patients = data11.entry;
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
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?code=17856-6&patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json').success(function(data4) {
          $rootScope.patients40 = data4;
         
         
  if ($rootScope.patients40.total != 0){
      $rootScope.y = "#/reports/0";
    };
    });
    $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Condition?code=46635009&patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json').success(function(data78) {
             $rootScope.patients41 = data78
             if ($rootScope.patients41.total != 0){
                $rootScope.y = "#/reports/0";
                    };
             });
    $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Condition?code=44054006&patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json').success(function(data77) {
                    $rootScope.patients42 = data77
                    if ($rootScope.patients42.total != 0){
                $rootScope.y = "#/reports/0";
                    };
          });      
   
   /// the below pulls up the data for a patient with diabetes by looking at the loinc code and saves the data to patients1
   // can use the below template to pull any data, just copy and paste within this controller, just remember to change 
   // the data variable to something like data2, and the patient varitable to something like patients2
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?code=17856-6&patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json&_sort:desc&_count=1').success(function(data1) {
          $scope.patients1 = data1.entry;
   $scope.whichItem1=$routeParams.itemId;
   });
   //BMI
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&code=39156-5&_format=json&_sort:desc&_count=1').success(function(data5) {
   $rootScope.patients5 = data5.entry;
   BMI = data5.entry[0].resource.valueQuantity.value;
   
    //AGE //Gender
    $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json&_sort:desc&_count=1').success(function(data6) {
   $rootScope.patients6 = data6.entry;
   year = data6.entry[0].resource.birthDate;
   AGE = 2015 - year.substr(0,4);
   Gender = data6.entry[0].resource.gender;
   $rootScope.BMIValue = "test"
   if (BMI < 18.5){ $rootScope.BMIValue = "Underweight"; };
   if (BMI > 18.5 && BMI <25){$rootScope.BMIValue = "Healthy";};
   if (BMI < 30 && BMI >25){$rootScope.BMIValue = "Overwieght";};
   if (BMI >35){$rootScope.BMIValue = "Obese";};
   //chance of getting diabetes based on age, bmi, gender
   //based on http://care.diabetesjournals.org/content/30/6/1562.full.pdf
   if (Gender == "female"){ if (AGE > 18 && AGE < 44){
        if (BMI < 18.5){ Chance = 12.2;}
        else if (BMI < 25 && BMI >18.5){Chance = 17.1;}
        else if (BMI < 30 && BMI >25){Chance = 35.4;}
        else if (BMI < 35 && BMI >30){Chance = 54.6;}
        else if (BMI >35){Chance = 74.4;}
            }
        else if (AGE > 44 && AGE <65){
            if (BMI < 18.5){ Chance = 10.6;}
            else if (BMI < 25 && BMI >18.5){Chance = 14.7;}
            else if (BMI < 30 && BMI >25){Chance = 30.4;}
            else if (BMI < 35 && BMI >30){Chance = 45.8;}
            else if (BMI >35){Chance = 62.2;}
        }
        else if (AGE > 64){
            if (BMI < 18.5){ Chance = 3.7;}
            else if (BMI < 25 && BMI >18.5){Chance = 9.3;}
            else if (BMI < 30 && BMI >25){Chance = 18.0;}
            else if (BMI < 35 && BMI >30){Chance = 27.3;}
            else if (BMI >35){Chance = 36.0;}
        }
   };
   if (Gender == "male"){ if (AGE > 18 && AGE < 44){
        if (BMI < 18.5){ Chance = 7.6;}
        else if (BMI < 25 && BMI >18.5){Chance = 19.8;}
        else if (BMI < 30 && BMI >25){Chance = 29.7;}
        else if (BMI < 35 && BMI >30){Chance = 57.0;}
        else if (BMI >35){Chance = 70.3;}
            }
        else if (AGE > 44 && AGE <65){
            if (BMI < 18.5){ Chance = 6.9;}
            else if (BMI < 25 && BMI >18.5){Chance = 17.7;}
            else if (BMI < 30 && BMI >25){Chance = 26.2;}
            else if (BMI < 35 && BMI >30){Chance = 50.9;}
            else if (BMI >35){Chance = 62.7;}
        }
        else if (AGE > 64){
            if (BMI < 18.5){ Chance = 2.2;}
            else if (BMI < 25 && BMI >18.5){Chance = 10.8;}
            else if (BMI < 30 && BMI >25){Chance = 14.5;}
            else if (BMI < 35 && BMI >30){Chance = 29.6;}
            else if (BMI >35){Chance = 34.7;}
        }
   };
   });
   });
   // below is how to assign a value to an object or variable that can then be used for the 
   //entired code. I used it here because we will need to use the variable "p" i the graph 
   //for the report controller page. 
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?code=17856-6&patient=' +$rootScope.patients1[$routeParams.itemId].id+ '&_format=json&_sort:desc&_count=1').success(function(data4) {
          $rootScope.patients4 = data4.entry;
   $scope.whichItem4=$routeParams.itemId;
   //p = data4.entry[0].resource.encounter.reference;
   AOneC = "0";
   if (data4.total != 0){
   AOneC = data4.entry[0].resource.valueString[6];
   };
   
   
   //17856-6 - loinc code for A1c
  
   ismale = "no"
   genderhosp= "";
genderamp= "";
genderdeath= "";
if (data11.entry[0].resource.gender === "male"){ismale = "yes";}
   if (ismale === "yes"){genderhosp = 22.25;genderamp = 0.37;genderdeath = 79.65;} else{genderhosp = 23.26; genderamp = 0.17;genderdeath = 72.09}

});
   });
  
}]);  
patientControllers.controller('technology_usedController', ['$scope','$rootScope','$http','$routeParams',
    function ($scope, $rootScope, $http, $routeParams){}]);
    
patientControllers.controller('nodiabetesController', ['$scope','$rootScope','$http','$routeParams',
      function ($scope, $rootScope, $http, $routeParams){
          
$scope.myDataSource1 = {
    chart: {
        caption: "prevelince of diabetes in the USA in millions",
        subcaption: "2012 statistics",
        startingangle: "200",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Age group : $label Total visit : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "diagnosed Diabetes",
            value: "20.9"
        },
        {
            label: "undiagnosed Diabetes",
            value: "8.1"
        },
	{
            label: "Prediabetes",
            value: "86"
        },
        {
            label: "without Diabetes or prediabetes",
            value: "197.8"
        }
        
    ]
};
 
 $scope.myDataSource2 = {
    chart: {
        caption: "Percentage of Diabetes per race",
        subCaption: "",
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
        label: "non-Hispanic whites",
        value: "7.6"
    },
    {
        label: "Asian Americans",
        value: "9.0"
    },
	{
        label: "Hispanics",
        value: "12.8"
    },
	{
        label: "non-Hispanic blacks",
        value: "13.2"
    },
    {
        label: "American Indians/Alaskan Natives",
        value: "15.9"
    }
    ]
};

$scope.myDataSource3 = {
    chart: {
        caption: "Major Cost Percentages, Subtotal = $245 billion",
        subcaption: "2012 statistics",
        startingangle: "20",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Age group : $label Total visit : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "hospital inpatient care",
            value: "43"
        },
	{
            label: "prescription medications",
            value: "18"
        },
        {
            label: "anti-diabetic agents and diabetes supplies",
            value: "12"
        },
	{
            label: "physician office visits",
            value: "9"
        },
        {
            label: "nursing/residential facility stays",
            value: "8"
        },
	{
            label: "other",
            value: "10"
        }
        
    ]
};
$scope.myDataSource4 = {
    //based on http://care.diabetesjournals.org/content/30/6/1562.full.pdf
    chart: {
        caption: "Lifetime risk of developing Diabetes based on current Age, Gender and BMI",
        subCaption: "Patient Gender: "+Gender,
        numberPrefix: "",
        theme: "ocean"
    },
    data:[{
        label: "AGE in years.",
        value: ""+AGE 
    },
    {
        label: "BMI.",
        value: ""+BMI
    },
    {
        label: "Percent chance of developing Diabetes.",
        value: ""+Chance
    },
    ]
};
$scope.attrs = {
    "caption": "BMI ranges and were the patient falls on it.",
    "numberprefix": "",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "",
    "captionpadding": "30",
    "linethickness": "1",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
    "showborder": "0"
};

$scope.categories = [
    {
        "category": [
            {
                "label": "Underweight - Healthy"
            },
            {
                "label": "Healthy - Overwieght"
            },
            {
                "label": "Overwieght  - Obese"
            },
            {
                "label": "Obese"
            }
           
        ]
    }
];

$scope.dataset = [
    {
        "seriesname": "BMI ranges",
        "data": [
            {
                "value": "0"
            },
            {
                "value": "18.9"
            },
            {
                "value": "24.9"
            },
            {
                "value": "29.9"
            }
        ]
    },
    {
        "seriesname": "Patient BMI",
        "data": [
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            
        ]
    }
];
    





      }]);
patientControllers.controller('ReportsController', ['$scope','$rootScope','$http','$routeParams',
      function ($scope, $rootScope, $http, $routeParams){ //p=90;
   //$http.get('js/data1.json').success(function(data){
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=46&_format=json').success(function(data){
   
   $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Observation?code=17856-6&patient=' +$rootScope.patients1[$rootScope.x].id+ '&_format=json').success(function(data4) {
          $rootScope.patients40 = data4.entry;
  
  
  // this code checks to see if there is a loinc code.

    
 });
  }); 
  
   $scope.myDataSource = {
    chart: {
        caption: "A1C Diabetes blood test screening",
        subCaption: "If over %6.5 then patient is Diabetic. if %0 then no patient data available",
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
        label: "Normal",
        value: "5.7"
    },
    {
        label: "Diabetes",
        value: "6.5"
    },
    {
        label: "Patient's",
        value: ""+AOneC
    }
    ]
};
  
 ////////////////////
 $scope.myDataSource1 = {
    chart: {
        caption: "prevelince of diabetes in the USA in millions",
        subcaption: "2012 statistics",
        startingangle: "200",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Age group : $label Total visit : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "diagnosed Diabetes",
            value: "20.9"
        },
        {
            label: "undiagnosed Diabetes",
            value: "8.1"
        },
	{
            label: "Prediabetes",
            value: "86"
        },
        {
            label: "without Diabetes or prediabetes",
            value: "197.8"
        }
        
    ]
};
 
 $scope.myDataSource2 = {
    chart: {
        caption: "Percentage of Diabetes per race",
        subCaption: "",
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
        label: "non-Hispanic whites",
        value: "7.6"
    },
    {
        label: "Asian Americans",
        value: "9.0"
    },
	{
        label: "Hispanics",
        value: "12.8"
    },
	{
        label: "non-Hispanic blacks",
        value: "13.2"
    },
    {
        label: "American Indians/Alaskan Natives",
        value: "15.9"
    }
    ]
};

$scope.myDataSource3 = {
    chart: {
        caption: "Major Cost Percentages, Subtotal = $245 billion",
        subcaption: "2012 statistics",
        startingangle: "20",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Age group : $label Total visit : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "hospital inpatient care",
            value: "43"
        },
	{
            label: "prescription medications",
            value: "18"
        },
        {
            label: "anti-diabetic agents and diabetes supplies",
            value: "12"
        },
	{
            label: "physician office visits",
            value: "9"
        },
        {
            label: "nursing/residential facility stays",
            value: "8"
        },
	{
            label: "other",
            value: "10"
        }
        
    ]
};
 
 $scope.myDataSource4 = {
    chart: {
        caption: "percent chance of hospitilization this year due to diabetes",
        subcaption:"2010 statistics",
        
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
       label: "US total",
       value: "22.78"
    },
    {
        label: "Your chance",
        value: ""+genderhosp
    }
    ]
};
 
$scope.myDataSource5 = {
    chart: {
        caption: "percent chance of lower extremity amputation this year due to diabetes",
        subCaption: "2010 statistics",
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
        label: "US total",
        value: "0.27"
    },
    {
        label: "Your chance",
        value: ""+genderamp
    }
    ]
};
$scope.myDataSource6 = {
    chart: {
        caption: "Percent chance of dying due to Diabetes",
        subCaption: "",
        numberPrefix: "%",
        theme: "ocean"
    },
    data:[{
        
        label: "US total",
        value: "75.81"
    },
    {
        label: "Your chance",
        value: ""+genderdeath
    }
    ]
};
$scope.attrs = {
    "caption": "BMI ranges and were the patient falls on it.",
    "numberprefix": "",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "",
    "captionpadding": "30",
    "linethickness": "1",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
    "showborder": "0"
};

$scope.categories = [
    {
        "category": [
            {
                "label": "Underweight - Healthy"
            },
            {
                "label": "Healthy - Overwieght"
            },
            {
                "label": "Overwieght  - Obese"
            },
            {
                "label": "Obese"
            }
           
        ]
    }
];

$scope.dataset = [
    {
        "seriesname": "BMI ranges",
        "data": [
            {
                "value": "0"
            },
            {
                "value": "18.9"
            },
            {
                "value": "24.9"
            },
            {
                "value": "29.9"
            }
        ]
    },
    {
        "seriesname": "Patient BMI",
        "data": [
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            {
                "value": ""+BMI
            },
            
        ]
    }
];
 ////////////
}]);  


