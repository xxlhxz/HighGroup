// JavaScript Document

var mv={};//命名空间

mv.tools={//工具
};

mv.content={
};

mv.method={
	
}

//活动属性
mv.content.activity={
activityName:"聚会",
activityPlace:"北京",
activityTime:"2015-3-1",
activityDescription:"同学聚会",
PayWay:{
	 aa:false,
	 whoPay:"zhouyu"
	}
}



$(function() {
	
	//LeanCloud初始化
	AV.initialize("ensd5v36s76n3hsz6tjlr6bplgi2k4gxs5ud6mq07fx3a0nv", "9hk6413v3no3zsagqm0o2qu1pyl8tejrw37xqrhvm3r7jw08");
	
	//获取对象
	var oActivityName = $("#activityName");
	var oActivityPlace = $("#activityPlace");
	var oActivityTime = $("#activityTime");
	var oActivityDescription = $("#activityDescription");
	var oAAPay=$("#payAA");
	var oWhoPay=$("#whoPay");
	
	//点击日历
	var oCalendar = $("#i_calendar");
	oCalendar.mousedown(function(){
	 oCalendar.addClass("pressDown");
	});
	oCalendar.mouseup(function(){
		oCalendar.removeClass("pressDown");
		});
	
	oCalendar.click(function(){
	 alert("你点击了时间选择！");
	});
	
	$("#ul_user").click(function(){
		alert("你点击了用户");
	});
	
	//属性改变后更新
	$(document).change(function(){
	mv.content.activity.activityName=oActivityName.val();
	mv.content.activity.activityPlace=oActivityPlace.val();
	mv.content.activity.activityTime=oActivityTime.val();
	mv.content.activity.activityDescription=oActivityDescription.val();
	
	var iPayWay = $("input[name='PayWay']:checked").val();
	if(iPayWay==1){
		mv.content.activity.PayWay={aa:true,whoPay:""};
	}
	else{
		
		mv.content.activity.PayWay={aa:false,whoPay:oWhoPay.val()};
	}
	
	
	});
	
	
	//点击 确认 按钮，提交数据
	$("#btn1").click(function(){
		
		alert(JSON.stringify(mv.content.activity));
		alert("提交成功！");
	});
	
	
})();