var API = "http://localhost:3000/post";

angular.module('myApp', ['ngRoute'])
    .controller('post', function ($scope, $http) {
        $scope.arr = [];
        // Lấy dữ liệu 
        $http.get(API).then(function (response) {
            $scope.arr = response.data;
        })
        // Xóa 
        $scope.delete = function (id) {
            if(confirm("Xóa Ko Con Lợn ?"))
            $http.delete(`${API}/${id}`)
                .then(
                    function (response) {
                        if (response.status == 200) {
                            alert("Xóa Thành Công");
                        }
                    }
                )
        }
        // $scope.insert = function () {
        //     const add = angular.copy($scope.add);
      
        //     $http.post(API, add)
        //       .then(function (response) {
        //         if (response.status === 201) { 
        //           $scope.arr.push(response.data); 
        //           $scope.add = {};
        //           alert("Insert Successful!");
        //         } else {
        //           console.error('Unexpected response status:', response.status);
        //         }
        //       })
        //       .catch(function (error) {
        //         console.error('Error inserting add:', error);
        //       });
        //   };
    });