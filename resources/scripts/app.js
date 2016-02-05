( function( globa, $, undef ) {
    $( document ).ready( function() {
        var $badgesContainer = $( '.badges-container' ).first();
        $( '#main-container' ).css({
            "min-width": $badgesContainer.find( '.bagde-container' ).width() * $badgesContainer.children().length
        })

        $( '.scaled' ).css({
            transform: 'scale(1)',
            opacity: '1'
        });
    });
})( this, jQuery );
