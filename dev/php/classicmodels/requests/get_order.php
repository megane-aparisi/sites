<?php

include('database/connexion.php');
include('helper/helper_functions.php');

$order = sanitizeGet($_GET['orderNumber']);

$TVA = 20;

$stmt = $pdo->prepare('SELECT
                          o.orderNumber,
                          c.customerName,
                          c.contactLastName,
                          c.contactFirstName,
                          c.addressLine1,
                          c.city,
                          p.productName,
                          od.quantityOrdered,
                          od.priceEach,
                          (od.quantityOrdered * od.priceEach) AS sousTotal,
                          ROUND(((od.quantityOrdered * od.priceEach) * ( ' . $TVA . '  / 100)), 2) AS montantTVA,
                      ROUND((od.quantityOrdered * od.priceEach) + ((od.quantityOrdered * od.priceEach) * ( ' . $TVA . '  / 100)),2) AS montantTTC
                        FROM orders AS o
                        INNER JOIN customers AS c ON o.customerNumber = c.customerNumber
                        INNER JOIN orderdetails AS od ON o.orderNumber= od.orderNumber
                        INNER JOIN products AS p ON od.productCode = p.productCode
                        WHERE o.orderNumber = :orderNumber;
                      ');

$stmt->bindParam(':orderNumber', $order['orderNumber']);

try {
    $stmt->execute();
    $order = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    die($e->getMessage());
}
