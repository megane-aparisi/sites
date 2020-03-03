SELECT
  o.orderNumber,
  o.customerNumber,
  c.customerName,
  c.contactLastName,
  c.contactFirstName,
  c.addressLine1,
  c.city,
  p.productName,
  od.quantityOrdered,
  od.priceEach,
  (od.quantityOrdered * od.priceEach) AS sousTotal,
  SUM(od.quantityOrdered * od.priceEach) AS totalHT,
  (totalHT * 0.196) AS totalTTC
FROM orders AS o
INNER JOIN customers AS c ON o.customerNumber = c.customerNumber
INNER JOIN orderdetails AS od ON o.orderNumber= od.orderNumber
INNER JOIN products AS p ON od.productCode = p.productCode;
