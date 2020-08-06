// FYI, this is built with jQuery

// activates strict mode in ECMAScript v5m nut ignored by earlier versions
'use strict';

//run code when documents is ready
$(document).ready(function() {

    // declares $block var as null - has no initial value
    let $block = null;

    // function that is called when a tower is clicked using a data-* attribute
    $('[data-tower]').click(function() {
        
        // if a block has been taken from a tower it is placed on the clicked tower 
        if ($block) {
            $(this).prepend($block);
            $block = null;  
        } 
        // otherwise the top most block is removed from the tower and stored in the detach method
        else {
            $block = $(this).children().first().detach();
        }
    })
})