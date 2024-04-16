var API = "http://localhost:3000/hoadon";
angular.module('myApp', ['ngRoute'])
    .controller('hoadon', function ($scope, $http, $routeParams) {
        $scope.arr = [];
        $scope.id = $routeParams.id;
        // Lấy dữ liệu 
        $http.get(API).then(function (response) {
            $scope.arr = response.data;
        })
        // Xóa 
        $scope.delete = function (id) {
            if (confirm("Xóa Ko Con Lợn ?"))
                $http.delete(`${API}/${id}`)
                    .then(
                        function (response) {
                            if (response.status == 200) {
                                alert("Xóa Thành Công");
                            }
                        }
                    )
        }
        $scope.add = function () {
            let newHoadon = {
                ma: $scope.hoadon.ma,
                ten: $scope.hoadon.ten,
                soluong: $scope.hoadon.soluong,
                gia: $scope.hoadon.gia
            };
            $http.post(API, newHoadon)
                .then(function (response) {
                    // Sau khi thêm thành công, cập nhật danh sách hoá đơn
                    $scope.arr.push(response.data);
                    // Đặt lại giá trị của biến hoadon để xóa dữ liệu trên form
                    $scope.hoadon = {
                        ma: "",
                        ten: "",
                        soluong: "",
                        gia: ""
                    };
                })
                .catch(function (error) {
                    console.error('Lỗi khi thêm mới hoá đơn:', error);
                    // Xử lý lỗi tại đây nếu cần
                });
        }
    })
    app.controller("update", function ($scope, $http, $routeParams) {
        $scope.hoadon = [];
        $scope.id = $routeParams.id;
    
        $http.get(`${API}/${$routeParams.id}`).then(function (res) {
            $scope.hoadon = res.data;
        }), function () {
            alert("loiiii");
        }
        $scope.update = function () {
            $scope.updateParams = {
                "ma": $scope.hoadon.ma,
                "ten": $scope.hoadon.ten,
                "soluong": $scope.hoadon.soluong,
                "gia": $scope.hoadon.gia
            }
            $http.put(`${API}/${$scope.id}`, $scope.updateParams).then(function () {
                alert("sua thanh cong");
                return document.location = "#!";
            }), function () {
                alert("sua khong thanh cong")
            }
        }
    })
