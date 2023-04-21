<?php

function action()
{
	if(isset($_POST['id']) && !is_int($_POST['id']) )
	{
		throw new Exception("Id is not a number");
	}
	if(isset($_POST['value']) && !is_string($_POST['value']) )
	{
		throw new Exception("Value is not a string");
	}
	
	return json_encode("validation successful")
}