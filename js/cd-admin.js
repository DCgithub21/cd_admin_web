/**
 *	弹窗
 *	title	标题
 *	url		请求的url
 *	w		弹出层宽度（缺省调默认值）
 *	h		弹出层高度（缺省调默认值）
 */
function cd_admin_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="html/404.html";
	};
	if (w == null || w == '') {
		w=70;
	};
	if (h == null || h == '') {
		h=80;
	};
	layer.open({
		type: 2,
		area: [w+'%', h+'%'],
		fix: false, //不固定
		maxmin: true,
		shadeClose: true,
		shade:0.4,
		title: title,
		content: url
	});
}

/**
 * 删除
 * @param  int id  
 * @param  string title 提示语
 * @param  string url 请求地址
 */
function cd_admin_del(id,title,url){
    layer.confirm('确认要删除"'+title+'"吗？',function(index){
        //发异步删除数据
        $.ajax({
            type : 'POST',//请求类型
            url : url,//请求地址
            data : {id : id},//请求数据
            async : true,//是否为异步
            cache : false,//是否缓存
            success : function(data){
                //var dataObj=eval("("+data+")");
                if(data){
                    layer.alert(
                        '成功',
                        {icon: 6},
                        function(){
                            location.reload();
                        }
                    );
                }else{
                    layer.alert('失败', {icon: 5});
                }
            }
        });
    });
}

/**
 * 更改状态
 * @param  int id  
 * @param  int status 状态值
 * @param  string title 提示语
 * @param  string url 请求地址
 */
function cd_admin_change(id,status,title,url){
    layer.confirm('确认更改状态为'+title+'吗？',function(index){
        //发异步把用户状态进行更改
        status = status == 1 ? 0 : 1;
        $.ajax({
            type : 'POST',//请求类型
            url : url,//请求地址
            data : {id : id, status : status},//请求数据
            async : true,//是否为异步
            cache : false,//是否缓存
            success : function(data){
                //var dataObj=eval("("+data+")");
                if(data){
                    layer.alert(
                        '成功',
                        {icon: 6},
                        function(){
                            location.reload();
                        }
                    );
                }else{
                    layer.alert('失败', {icon: 5});
                }
            }
        });
    });
}