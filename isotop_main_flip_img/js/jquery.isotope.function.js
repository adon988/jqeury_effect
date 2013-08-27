    $(function(){
    
          var $container = $('#container');
        
          $container.isotope({
            masonry: {
              columnWidth: 120
            },
            sortBy: 'number',
            getSortData: {
              number: function( $elem ) {
                var number = $elem.hasClass('element') ? 
                  $elem.find('.number').text() :
                  $elem.attr('data-number');
                return parseInt( number, 10 );
              },
              alphabetical: function( $elem ) {
                var name = $elem.find('.name'),
                    itemText = name.length ? name : $elem;
                return itemText.text();
              }
            }
          });
    
          
          var $optionSets = $('#options .option-set'),
              $optionLinks = $optionSets.find('a');

          //點擊篩選選單
          $optionLinks.click(function(){
            var $this = $(this);
            if ( $this.hasClass('selected') ) {
              return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
              changeLayoutMode( $this, options )
            } else {
              $container.isotope( options );
            }
            return false;
          });

    });