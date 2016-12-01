	

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



//**********************************

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





});
