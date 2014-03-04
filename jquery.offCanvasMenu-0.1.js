// need to refactor to remove the repeated s variable declarations.
var OffCanvasMenu = {
	
  settings: {
    $body: $('body'),
    $clickClose: $('#site-content'),
    $openBtn: $('#ocm-open-btn'),
    $closeBtn: $('#ocm-close-btn'),
    $pageWrapper: $('#ocm-page-wrapper')
  },
  
  init: function() {
	  var s = this.settings;
	  $('html').addClass('js');	  
	  this.bindEvents();
  },
  
	bindEvents: function() {
   	var s = this.settings; 
    s.$openBtn.on( "click", this.openMenu );
    s.$closeBtn.on( "click", this.closeMenu );
    s.$pageWrapper.on( "click", '.ocm-page-close', this.pageCloseMenu );
  },
  
  openMenu: function(e) {
   	var s = OffCanvasMenu.settings; 
		e.preventDefault();
	  e.stopPropagation();
		s.$body.toggleClass('is_active-ocm');
		s.$clickClose.addClass('ocm-page-close');
  },
  
  closeMenu: function(e) {
   	var s = OffCanvasMenu.settings; 
		e.preventDefault();	  
		s.$body.removeClass('is_active-ocm');
		s.$clickClose.removeClass('ocm-page-close');
  },
	
	pageCloseMenu: function(e) {
   	var s = OffCanvasMenu.settings; 
		e.stopPropagation();
		s.$body.removeClass('is_active-ocm');
		s.$clickClose.removeClass('ocm-page-close');		
	}
	
};

