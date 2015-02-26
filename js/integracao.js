( function( $ ) {
	var core = {
		init: function() {
			$( "body" ).tooltip({
				selector: '[data-toggle="tooltip"]' 
			});

			$( ".process" ).bind( "click", function() {
				core.createField();
			});

			$( ".generateFile" ).bind( "click", function() {
				core.generateFile();
			});

			$( "#restore" ).bind( "click", function() {
				core.restore();
			});

			$( "#config" ).val( localStorage.getItem( "cfg_layout" ) );
		},

		createField: function() {
			var config = $( "#config" ).val();
			var cont = 0;

			if ( !config ) {
				return;
			}

			localStorage.setItem( "cfg_layout", config );

			$( "form" ).empty();
			config = JSON.parse( config );
			$.each( config.fields, function() {

				var id = "element" + cont;
				++cont;

				createDOM.create( id, this.title, this.required, this.text );
			});
		},

		generateFile: function() {
			var $file = $( "#file" );
			$.each( $( "form" ).find( "input" ), function() {
				$file.val( $file.val() + $( this ).val() + "||" ); 
			});
		},

		restore: function() {
			var data =$( "#file").val();
			if ( !data ) {
				return;
			}

			data = data.split( "||" );
			var i = 0;
			for ( ;i < data.length; i ++ ) {				
				$( "#element" + i ).val( data[i] );
			}			
		}

	}

	var createDOM = {
		getContainer : function() {
			return $( "<div class='form-group col-xs-12 col-sm-5 col-md-4 col-lg-4'>" );
		},

		getLabel: function( id, required, text ) {
			var $label = $( "<label for='" + id + "'>" );
			$label.append( text );
			if ( required === "true" ) {
				$label.append( "<span class='required'>*&nbsp;</span>" );
			}
			return $label;
		},

		getField: function( id, title ) {
			return $( "<input type='text' class='form-control' id='" + id
			+ "' data-toggle='tooltip' data-placement='top' title='"+ title +"'>" );
		},

		create: function( id, title, required, text ) {
			var $container = createDOM.getContainer();
			$container
				.append( createDOM.getLabel( id, required, text ) )
				.append( createDOM.getField( id, title ) )
				.appendTo( $( "form" ) );
		}
	}

	core.init();
})( jQuery );