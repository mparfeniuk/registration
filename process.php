<?PHP
  sleep(3);

  if($_POST && isset($_POST['lk-email'])) {

    $email = $_POST['lk-email'];

    echo "Welcome " . $email;

  }

?>