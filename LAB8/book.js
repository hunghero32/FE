var apiUrl = "http://localhost:3000/HoaDon";
app.controller("listHoaDon", function ($scope, $http) {
    $scope.listHd = [];
    $http.get(apiUrl).then(function (res) {
        $scope.listHd = res.data;
    }, function () {
        alert("Hiển thị danh sách không thành công")
    })
    $scope.btnDelete = function (id) {
        if (confirm("Bạn có chắc chắn muỗn xóa không")) {
            $http.delete(`${apiUrl}/${id}`).then(function () {
                alert("Xóa thành công");
            }, function () {
                alert("Xóa không thành công");
            })
        }
    }
})
app.controller("add", function ($scope, $http) {
    $scope.maSP = "";
    $scope.tenSP = "";
    $scope.soLuong = "";
    $scope.gia = "";
    $scope.addNew = function () {
        $scope.obj = {
            "maSP": $scope.maSP,
            "tenSP": $scope.tenSp,
            "soLuong": $scope.soLuong,
            "gia": $scope.gia
        }
        $http.post(`${apiUrl}`, $scope.obj).then(function () {
            alert("Thêm thành công");
            return document.location = "#!listHoaDon"
        }, function () {
            alert("Thêm không thành công")
        })
    }
})
app.controller("edit", function ($scope, $http, $routeParams) {
    $scope.listHd = [];
    $scope.id = $routeParams.id;

    $http.get(`${apiUrl}/${$routeParams.id}`).then(function (res) {
        $scope.listHd = res.data;
    }), function () {
        alert("loiiii");
    }
    $scope.editHoaDon = function () {
        $scope.editParams = {
            "maSP": $scope.listHd.maSP,
            "tenSP": $scope.listHd.tenSP,
            "soLuong": $scope.listHd.soLuong,
            "gia": $scope.listHd.gia
        }
        $http.put(`${apiUrl}/${$scope.id}`, $scope.editParams).then(function () {
            alert("sua thanh cong");
            return document.location = "#!listHoaDon";
        }), function () {
            alert("sua khong thanh cong")
        }
    }
})