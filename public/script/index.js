$(function(){
		var stynone=`<style>:root{--vcolor: #ddd;}</style>`;
  	  	var styblock=`<style>:root{--vcolor: #ffd5c5;}</style>`;
		// 获取当前点赞数量
		axios({
	  		method:'get',
	  		url:'/getCount?id=2',
  		}).then(function (res) {
       		  	$('.count').html(res.data[0].number);
  	  	}).catch(function (error) {
  	  	  	console.log(error);
  	  	});
  	  	  
  	  	System.import('/script/addlikes.js').then(function(m) {
  	  	   	$.extend({m});
  	  	   	var num=0;
  	  	   	$(document).on('click','.hand',function(){
  	  	   		num=$.m(num);
  	  	   		if(num<10){
  	  	   			$(styblock).appendTo('head');
  	  	   			sendNum(num)
  	  	   		}else{
  	  	   			num=0;
  	  	   			sendNum(num)
  	  	   			$(stynone).appendTo('head');

  	  	   		}
  	  	  	})	
  	  	});


		function sendNum(num){
			 axios({
		  		method:'get',
		  		url:`/get?id=2&number=${num}`,
	  		}).then(function (res) {
	       		  	if(res.data.code==0){
	       		  		$('.count').html(num);	
	       		  	}
	  	  	}).catch(function (error) {
	  	  	  	console.log(error);
	  	  	});
		}
})