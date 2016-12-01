	

$(function(){


	 // $(".chosen").chosen();       // chosen
	 
	 	 function ajax_select_city(){
	 	var params = {
	 		id: $("#regionList :selected").attr("id"),
	 	}
	 	$.post("ajax_select.php", params, function (data) {
	 		$("#cityList").html(data);
	 	});
	 }

	 function ajax_select_area(){
	 	var params = {
	 		id: $("#cityList :selected").attr("id"),
	 	}
	 	$.post("ajax_select.php", params, function (data) {
	 		$("#areaList").html(data);
	 	});

	 }



	 // function ajax_select_city(){
	 // 	var params = {
	 // 		text: $("#regionList :selected").text(),
	 // 	}
	 // 	$.post("ajax_select.php", params, function (data) {
	 // 		$("#cityList").html(data);
	 // 	});
	 // }

	 // function ajax_select_area(){
	 // 	var params = {
	 // 		text: $("#cityList :selected").text(),
	 // 	}
	 // 	$.post("ajax_select.php", params, function (data) {
	 // 		$("#areaList").html(data);
	 // 	});

	 // }

//**********************************
//
$('#regionList').on('change', ajax_select_city);

$('#cityList').on('change', ajax_select_area);

//*********************************
$('#submit').click(function() {

	if($("#full_name").val()=="" && $("#e_mail").val()=="" && $("#regionList").text()=="" 
		&& $("#cityList").text()=="" && $("#areaList").text()==""){

		alert('Заполните все поля');
}else{

	$.ajax({
		url: 'ajax_person_data.php',
		method: 'POST',
		data: {

			full_name: $("#full_name").val(),
			e_mail:$("#e_mail").val(),
			//region:$("#regionList :selected").text(),
			//city:$("#cityList :selected").text(),
			//area:$("#areaList :selected").text()
		     area_id:$("#areaList :selected").attr("id")

		},
			// async: false,
			dataType:'text',
			//response: 'text',
			success: function(data){ 
				if(data){
					alert("Прибыли данные: " + data);
				}
			}


		}).done(function(data){

			if(data){
				var arr = data.split(",");
				alert(arr[2]);
				$("#full_name").val(arr[0]);
				$("#e_mail").val(arr[1]);
				$("#regionList :selected").text(arr[4]);
				$("#cityList :selected").text(arr[3]);
				$("#areaList :selected").text(arr[2]);

			}

		});

	}	

});


//**********************************************

// $("#regionList").change(function(){
//     var params = {
// 		text: $("#regionList :selected").text(),
// 	}
// 	$.post("ajax_select.php", params, function (data) {
// 		$("#cityList").html(data);
// 	});
// });

//**********************************************************


// $("#cityList").change(function(){
// 	var params = {
// 		text: $("#cityList :selected").text(),
// 	}
// 	$.post("ajax_select.php", params, function (data) {
// 		$("#areaList").html(data);
// 	});
// });


//**********************************************************

// function ajaxRequest() {
//   return $.ajax({
//   	url: 'ajax_person_data.php',
// 			method: 'POST',
// 			data: {

// 				full_name: $("#full_name").val(),
// 				e_mail:$("#e_mail").val(),
// 				region:$("#regionList :selected").text(),
// 				city:$("#cityList :selected").text(),
// 				area:$("#areaList :selected").text()

// 			},
// 			 //async: false,
// 			dataType:'text',
// 			//response: 'text',
// 			success: function(data){ alert("Прибыли данные: " + data);}
//   });
// }

// $('#submit').on('click', function(){

//   $.when( 
//     ajaxRequest()
//   ).then(
//     function (data) {
//     	   var arr = data.split(",");
//             alert(arr[3]);
//          $("#full_name").val(arr[0]);
// 	    $("#e_mail").val(arr[1]);
// 		$("#regionList :selected").text(arr[2]),
// 		$("#cityList :selected").text(arr[3]),
// 		$("#areaList :selected").text(arr[4]);

//     }
//   );

// });



//========================work======================


// $('#submit').click(function() {

// 	if($("#full_name").val()=="" && $("#e_mail").val()=="" && $("#regionList").text()=="" 
// 		&& $("#cityList").text()=="" && $("#areaList").text()==""){

// 		alert('Заполните все поля');
// }else{

// 	$.ajax({
// 		url: 'ajax_person_data.php',
// 		method: 'POST',
// 		data: {

// 			full_name: $("#full_name").val(),
// 			e_mail:$("#e_mail").val(),
// 			region:$("#regionList :selected").text(),
// 			city:$("#cityList :selected").text(),
// 			area:$("#areaList :selected").text()

// 		},
// 			// async: false,
// 			dataType:'text',
// 			//response: 'text',
// 			success: function(data){ 
// 				if(data){
// 					alert("Прибыли данные: " + data);
// 				}
// 			}


// 		}).done(function(data){

// 			if(data){
// 				var arr = data.split(",");
// 				alert(arr[3]);
// 				$("#full_name").val(arr[0]);
// 				$("#e_mail").val(arr[1]);
// 				$("#regionList :selected").text(arr[2]);
// 				$("#cityList :selected").text(arr[3]);
// 				$("#areaList :selected").text(arr[4]);

// 			}

// 		});

// 	}	

// });


//=======================================================


// $('#submit').click(function() {

// 	var text = $.ajax({
// 		url: 'ajax_person_data.php',
// 		method: 'POST',
// 		data: {

// 			full_name: $("#full_name").val(),
// 			e_mail:$("#e_mail").val(),
// 			region:$("#regionList :selected").text(),
// 			city:$("#cityList :selected").text(),
// 			area:$("#areaList :selected").text()

// 		},
// 		async: false,
// 		dataType:'text',
// 			//response: 'text',
// 			success: function(data){ alert("Прибыли данные: " + data);}


// 		}).responseText;

// 	var arr = text.split(",");
// 	alert(arr[2]);

// 	$("#full_name").val(arr[0]);

// });


////============================================================
// function subAjax (){
// 	var res=function(){
// 		var result="";

// 		$.ajax({
// 			url: 'ajax_person_data.php',
// 			method: 'POST',
// 			data: {

// 				full_name: $("#full_name").val(),
// 				e_mail:$("#e_mail").val(),
// 				region:$("#regionList :selected").text(),
// 				city:$("#cityList :selected").text(),
// 				area:$("#areaList :selected").text()

// 			},
// 			async: false,
// 			dataType:'text',
// 			success: function(data){ 
// 				//alert("Прибыли данные: " + data);
// 				result = data;
// 			}
// 		});
// 		return result;
// 	}
// 	var str = res();
// 	alert(str);
// 	var arr = str.split(",");
// 	$("#full_name").val(arr[0]);
// 	$("#e_mail").val(arr[1]);
// 	$("#regionList :selected").text(arr[2]),
// 	$("#cityList :selected").text(arr[3]),
// 	$("#areaList :selected").text(arr[4]);

// }

//===========================================???
// function subAjax (){

// 	var result="";
// 	$.ajax({
// 		url: 'ajax_person_data.php',
// 		method: 'POST',
// 		data: {

// 			full_name: $("#full_name").val(),
// 			e_mail:$("#e_mail").val(),
// 			region:$("#regionList :selected").text(),
// 			city:$("#cityList :selected").text(),
// 			area:$("#areaList :selected").text()

// 		},
// 		async: false,
// 		dataType:'text',
// 		success: function(data){ 
// 				//alert("Прибыли данные: " + data);
// 				result = data;
// 			}
// 		});
//        //return result;
//        alert(result);
//        var arr = result.split(",");
//        $("#full_name").val(arr[0]);
//        $("#e_mail").val(arr[1]);
//        $("#regionList :selected").text(arr[2]),
//        $("#cityList :selected").text(arr[3]),
//        $("#areaList :selected").text(arr[4]);


//    }

//================================================
// function subAjax (){

// 	function testAjax() {
// 		return $.ajax({
// 			url: 'ajax_person_data.php',
// 			method: 'POST',
// 			data: {

// 				full_name: $("#full_name").val(),
// 				e_mail:$("#e_mail").val(),
// 				region:$("#regionList :selected").text(),
// 				city:$("#cityList :selected").text(),
// 				area:$("#areaList :selected").text()

// 			},
// 			async: false,
// 			dataType:'text',
// 			success: function(data){ 
// 				alert("Прибыли данные: " + data);
// 			}
// 		});
// 	}

// 	var promise = testAjax();
// 	var text = promise.responseText;
// 	alert(text);
// 	var arr = text.split(",");
// 	$("#full_name").val(arr[0]);
// 	$("#e_mail").val(arr[1]);
// 	$("#regionList :selected").text(arr[2]),
// 	$("#cityList :selected").text(arr[3]),
// 	$("#areaList :selected").text(arr[4]);


//=========================================================




});
