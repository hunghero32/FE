var API = "http://localhost:3000/hoadon";

angular.module('myApp', ['ngRoute'])
    .controller('hoadon', function ($scope, $http) {
        $scope.arr = [];
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
        $scope.update = function(id) {
            // Gửi yêu cầu GET đến API để lấy thông tin hoá đơn dựa trên id
            $http.get(`${API}/${id}`)
                .then(function(response) {
                    if (response.data) {
                        let hoadonToUpdate = response.data;
        
                        // Hiển thị thông tin hoá đơn trong form để cập nhật
                        $scope.hoadon = hoadonToUpdate;
                    } else {
                        console.error('Không tìm thấy hoá đơn có id:', id);
                    }
                })
                .catch(function(error) {
                    console.error('Lỗi khi lấy thông tin hoá đơn:', error);
                    // Xử lý lỗi nếu cần
                });
        };
        
    });