
<?php
  $names = array('pablo leon','nieves borrero','victoriano sevillano','guillermo boquizo','rafa mellado','mario ferrer');
  $query = $_POST['query']
  if(!empty($query)) {
    $length = strlen($query) > 0 ? strlen($query) : 999;
    $result = "<ul>";

    foreach($names as $name) {
      if(strtolower(substr($name,0,$length))==$query)
        $result .= '<li>' . $name . '</li>';
    }
    if($result=="<ul>")
      echo '<ul><li>There is no coincidences</li></ul>';
    else {
      $result .= '</ul>';
      echo $result;
     }
  }
?> 