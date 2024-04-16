var api = "http://localhost:3000/HoaDon";
app.controller("list", function ($scope, $http) {
    $scope.list = [];
    $http.get(api).then(function (res) {
        $scope.list = res.data;
    })
    $scope.delete = function (id) {
        if (confirm("")) {
            $http.delete(`${api}/${id}`).then(function () {
                alert("Xóa thành công");
            })}}
})
app.controller("add", function ($scope, $http) {
    $scope.ma = "";
    $scope.add = function () {
        $scope.obj = {
            "ma": $scope.ma,
        }
        $http.post(`${api}`, $scope.obj).then(function () {
            alert("Thêm thành công");
            return document.location = "#!"})}
})
app.controller("update", function ($scope, $http, $routeParams) {
    $scope.list = [];
    $scope.id = $routeParams.id;
    $http.get(`${api}/${$routeParams.id}`).then(function (res) {
        $scope.list = res.data;
    })
    $scope.update = function () {
        $scope.updateParams = {
            "ma": $scope.list.ma,
        }
        $http.put(`${api}/${$scope.id}`, $scope.updateParams).then(function () {
            alert("sua thanh cong");
            return document.location = "#!";
        })}
})