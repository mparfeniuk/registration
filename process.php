<?PHP
  sleep(3);

  if($_POST && isset($_POST['email'])) {

    $email = $_POST['email'];

    echo "Welcome " . $email;

  }

?>