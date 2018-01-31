<?php
	header("Content-type:application/json; charset=utf-8");
	$con = mysql_connect("localhost","root","");
	if(! $con ){
	    	die('Could not connect: ' . mysqli_error());
	}else{
		 // echo '数据库连接成功！';
		 mysql_select_db('thumbs', $con);
		
		 //UPDATE
		  $number=$_REQUEST['number'];
		  $id=$_REQUEST['id'];

		  $sql = "UPDATE `statistics` SET `number`= $number WHERE `id`=$id";
		  $result = mysql_query($sql,$con);
	              if(!$result){
		 	die('无法插入数据: ' . mysql_error($con));
		 }else{
			$resdate = [
			'msg' => '数据插入成功', 'code' => '0'
			];
			echo json_encode($resdate);
	 	}
	}
	mysql_close($con);

?>