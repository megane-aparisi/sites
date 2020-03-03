<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Les commandes</title>
    <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link href="css/normalize.css" rel="stylesheet" >
</head>
<body>
  <main>


        <?php if(array_key_exists('orderNumber', $_GET)) : ?>
            <?php include('views/orders/view_orderdetails.php'); ?>
            <a class="backhome" href="/dev/php/classicmodels">Back To Homepage</a>

        <?php else : ?>
        <?php include('views/orders/view_orderslist.php'); ?>

        <?php endif ?>
 </main>
</body>
</html>
