@echo off
:: Kiểm tra xem chương trình đã được chạy dưới quyền quản trị hay chưa
net session >nul 2>&1
if %errorlevel% neq 0 (
    :: Nếu chưa chạy dưới quyền quản trị, chạy lại chính tập lệnh dưới quyền quản trị
    echo Chay Lai chinh tap lenh duoi quyen quan tri
    :: Lấy đường dẫn của tập lệnh
    set "batchFile=%~dpnx0"
    powershell -Command "Start-Process cmd -ArgumentList '/c %batchFile%' -Verb RunAs"
    exit /b
)

:: Chương trình của bạn dưới đây
:: Đây là nơi bạn đặt các dòng lệnh mà bạn muốn chạy dưới quyền quản trị
echo Dang kich hoạt Win Pro.
sc config LicenseManager start= auto & net start LicenseManager
sc config wuauserv start= auto & net start wuauserv
changepk.exe /productkey VK7JG-NPHTM-C97JM-9MPGT-3V66T
exit
pause
