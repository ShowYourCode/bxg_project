



define([
    'jquery'
], function($) {
    $('#btn').on('click',function(e){
        var $userName=$('#name').val();
        var $userPass=$('#pass').val();
        if(!$userName.trim()||!$userPass.trim()){
            return false;
        }
        var obj={
            tc_name:$userName,
            tc_pass:$userPass
        };
        $.ajax({
            url:'/api/login',
            type:'post',
            data:obj,
            dataType:'json',
            success:function(info){
                console.log(info);
                alert('太厉害了，你登录成功了，准备去意大利吃细面条');
            }
        });
    })
    
});