// requires "util/bitmask-util.js"

(function() {
	
	// Factory
	var DiaSemanaUtil = {};
	
	DiaSemanaUtil.create = function( bitmask ) {
		if ( typeof bitmask === 'undefined' ) {
			bitmask = 0;
		}
		
		return new DiaSemana( bitmask );
	};
	
	// Class
	function DiaSemana( bitmask ) {
		var that = this;
		
		that.isDomingo = function() {
			return BitmaskUtil.isEnabled( bitmask, 0 );
		};
		
		that.setDomingo = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 0, habilita );
		};
		
		that.isSegunda = function() {
			return BitmaskUtil.isEnabled( bitmask, 1 );
		};
		
		that.setSegunda = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 1, habilita );
		};
		
		that.isTerca = function() {
			return BitmaskUtil.isEnabled( bitmask, 2 );
		};
		
		that.setTerca = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 2, habilita );
		};
		
		that.isQuarta = function() {
			return BitmaskUtil.isEnabled( bitmask, 3 );
		};
		
		that.setQuarta = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 3, habilita );
		};
		
		that.isQuinta = function() {
			return BitmaskUtil.isEnabled( bitmask, 4 );
		};
		
		that.setQuinta = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 4, habilita );
		};
		
		that.isSexta = function() {
			return BitmaskUtil.isEnabled( bitmask, 5 );
		};
		
		that.setSexta = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 5, habilita );
		};
		
		that.isSabado = function() {
			return BitmaskUtil.isEnabled( bitmask, 6 );
		};
		
		that.setSabado = function( habilita ) {
			bitmask = BitmaskUtil.toggle( bitmask, 6, habilita );
		};
		
		that.getValue = function() {
			return bitmask;
		};

		that.toJSON = function() {
			return {
				domingo: that.isDomingo(),
				segunda: that.isSegunda(),
				terca: that.isTerca(),
				quarta: that.isQuarta(),
				quinta: that.isQuinta(),
				sexta: that.isSexta(),
				sabado: that.isSabado()
			};
		};

		that.toString = function( base ) {
			var str,
				json = that.toJSON();

			if ( typeof base !== 'undefined' ) {
				str = ( json.sabado ? '1' : '0' );
				str += ( json.sexta ? '1' : '0' );
				str += ( json.quinta ? '1' : '0' );
				str += ( json.quarta ? '1' : '0' );
				str += ( json.terca ? '1' : '0' );
				str += ( json.segunda ? '1' : '0' );
				str += ( json.domingo ? '1' : '0' );
				return str;
			}

			return JSON.stringify( json );
		};
	}
	
	// Expose
	window.DiaSemanaUtil = DiaSemanaUtil;
}());