<?php

include('requests/get_orders.php');

?>
<table>
    <caption>Liste des commandes</caption>
    <thead>
      <tr> <!-- tr = ligne  -->
        <th class="td_all">Voir détail de la commande</th>
        <th class="td_all">Numéro de la commande</th>  <!-- td = Colonne  -->
        <th class="td_all">Date de commande</th> <!-- th = en tête  -->
        <th class="td_all">Date de livraison</th>
        <th class="td_all">Statut de la commande</th>
      </tr>
    </thead>
    <tbody>

<?php
if($orders) {
    foreach($orders as $order) {?>
      <tr>
        <td>
          <?php if(empty($_GET)) : ?>
              <a href="?orderNumber=<?=$order['orderNumber']; ?>"><span>Click to see details</span></a>
          <?php endif ?>
        </td>
        <td>  <?= $order['orderNumber']; ?></td>
        <td><?= $order['orderDate']; ?></td>
        <td><?= $order['shippedDate']; ?></td>
        <td><?= $order['status']; ?></td>
      </tr><?php
    }
} else {
    echo '<p>There is no orders yet</p>';
}
?>
</tbody>
</table>
