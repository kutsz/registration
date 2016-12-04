<?php

/**
* 
*/

require_once 'Model.php'; 

class Controller 
{
	public static function view()
	{
		Model::db_connection(); // open database connection

		$region = Model::getRegion();

		Model::close_db_connection(); // close database connection

        require 'View.php';

	}

	 
}

