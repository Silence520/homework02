<?php
	header("Content-type:application/json; charset=utf-8");
	$con = mysql_connect("localhost","root","");
	if(! $con ){
	    	die('Could not connect: ' . mysqli_error());
	}else{
		  // echo '数据库连接成功！';
		  mysql_select_db('thumbs', $con);

		  $id=$_REQUEST['id'];
  		  $sql = "SELECT `number`,`id` FROM `statistics` WHERE `id`=$id";
 	  	  mysql_query("set names 'utf8'");
 		  $result=mysql_query( $sql,$con);
 		  $datarow = mysql_num_rows($result);
 		  $arr=array();
 		  for($i=0;$i<$datarow;$i++){
 		             $sql_arr = mysql_fetch_assoc($result);
 		             $newstitlr = $sql_arr['id'];
 		             $newscontent = $sql_arr['number'];
 		             array_push($arr, array('id' => $newstitlr ,'number' => $newscontent ));

 		  };
 		 echo json_encode($arr);

	}
	
	mysql_close($con);

?>