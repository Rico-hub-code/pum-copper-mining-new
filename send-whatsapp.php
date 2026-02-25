<?php

$name = urlencode($_POST['name']);
$email = urlencode($_POST['email']);
$phone = urlencode($_POST['phone']);
$company = urlencode($_POST['company']);
$type = urlencode($_POST['project_type']);
$details = urlencode($_POST['project_details']);

$whatsappNumber = "260772786809";

$message = "New Consultation Request:%0A%0A"
    . "Name: $name%0A"
    . "Email: $email%0A"
    . "Phone: $phone%0A"
    . "Company: $company%0A"
    . "Project Type: $type%0A"
    . "Details: $details";

header("Location: https://wa.me/$whatsappNumber?text=$message");
exit();