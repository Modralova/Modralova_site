<?php

include 'DBconnect.php';

$method = $_SERVER['REQUEST_METHOD'];

if (!isset($_SESSION)) {
  ini_set("session.cookie_domain", '.localhost');
  session_set_cookie_params(300, '/', '.localhost');
  session_start();
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');
header("Access-Control-Allow-Origin:http://localhost:3000");


if ($method == "POST") {

  $http_origin = $_SERVER['HTTP_REFERER'];
  //var_dump($http_origin);
}

$objDB = new DbConnect;
$conn = $objDB->connect();



if ($method == "GET") {

  echo <<<END
<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="description" content="artist Jan Mędarala's personal website"/>
<meta name="keywords" content="Jan,Mędrala,jasiekemedrala,wokalista,vocal,master,kontratenor,countertenor,trener">
<title>modralova</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
END;


} else {

  $payload = json_decode(file_get_contents("php://input"));

  switch ($payload) {

    case !$payload->logged:




      $login = $payload->username;
      $pswd =  $payload->password;

      $str = "<br />";



      $useQuery = $conn->prepare("SELECT * FROM users WHERE master = :login");
      $useQuery->bindValue(':login', $login, PDO::PARAM_STR);
      $useQuery->execute();

      $res = $useQuery->fetch();




      if ($res && password_verify($pswd, $res['passport'])) {

        $_SESSION['logged_id'] = $res['_id_'];
        $_SESSION['logged'] = true;

        unset($_SESSION['bad_attempt']);

        setcookie("modralova", $res['_id_'], time() + 300);

        $queryPld = json_encode($_SESSION);


        print_r($queryPld);
      } else {

        $_SESSION['bad_attempt']  = true;
      }

      break;

    case $payload->logged:

      setcookie("modralova", '', time() - 1);
      $_SESSION['logged'] = false;
      unset($_SESSION['logged_id']);

      $queryPld = json_encode($_SESSION);


      print_r($queryPld);



      break;

    default:

      setcookie("modralova", '', time() - 1);


      $_SESSION['logged'] = false;


      $queryPld = json_encode($_SESSION);

      unset($_SESSION['logged_id']);

      print_r($queryPld);
  }
}
