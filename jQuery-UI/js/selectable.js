$(document).ready(function() {
    $('#container').bind("mousedown", function(e) {
    	e.metaKey = true;}).selectable();
    });
