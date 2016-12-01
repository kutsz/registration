<!DOCTYPE html>
<html>
  <head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<title>Check in form</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="chosen/chosen.min.css"> 
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="chosen/chosen.jquery.min.js"></script> 

  </head>
  <body>

	<form action="" id="registration" method="POST">

		<p>
			Ф.И.О<br>
			<input type="text" name="full_name" id="full_name" required> 
		</p>

		<p>
			E-mail <br>
			<input type="e_mail" name="e_mail" id="e_mail" required> 
        </p>

		<p>
			Список областей <br>
			<select class="chosen" name= "regionList" id="regionList" data-placeholder="Выберите область"required> 
					<option></option>
				<?php foreach ($region as $regionItem): ?>
                    <option id="<?= $regionItem['ter_id']?>"><?php echo $regionItem['ter_name']; ?></option>
				<?php endforeach; ?>

			</select> 

		</p>

		<p>
			Список городов <br>
			<select id="cityList" name = "cityList" class="chosen"  data-placeholder="Выберите город" required>
				<option></option>
			</select> 

		</p>

		<p>
			Список районов <br>
			<select id="areaList" name = "areaList" class="chosen" data-placeholder="Выберите район" required> 
				<option></option>
			</select> 

		</p>

		<p>              
			<input type="submit" name="submit" id="submit" value="Зарегистрироваться"> 
		</p>


	</form>
		
	<script src="js/script.js"></script>

  </body>
</html>


