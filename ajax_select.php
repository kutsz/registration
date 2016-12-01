<?php
require_once 'Model.php';

Model::db_connection();

  $id = $_POST["id"];


if(isset($id)){

	$place = [];
	$place = Model::getList_places($id);


	foreach ($place as $placeItem){
		echo "<option id = ".$placeItem['ter_id'].">{$placeItem['ter_name']}</option>";
	}

}

