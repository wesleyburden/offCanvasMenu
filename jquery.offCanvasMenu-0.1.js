var s,
OffCanvasMenu = {
	
  settings: {
    $body: $('body'),
    $clickClose: $('#site-content'),
    $openBtn: $('#ocm-open-btn'),
    $closeBtn: $('#ocm-close-btn'),
    $pageWrapper: $('#ocm-page-wrapper')
  },
  
  init: function() {
	  s = this.settings;
	  $('html').addClass('js');	  
	  this.bindEvents();
  },
  
	bindEvents: function() {
    s.$openBtn.on( "click", this.openMenu );
    s.$closeBtn.on( "click", this.closeMenu );
    s.$pageWrapper.on( "click", '.ocm-page-close', this.pageCloseMenu );
  },
  
  openMenu: function(e) {
		e.preventDefault();
	  e.stopPropagation();
		s.$body.toggleClass('is_active-ocm');
		s.$clickClose.addClass('ocm-page-close');
  },
  
  closeMenu: function(e) {
		e.preventDefault();	  
		s.$body.removeClass('is_active-ocm');
		s.$clickClose.removeClass('ocm-page-close');
  },
	
	pageCloseMenu: function(e) {
		e.stopPropagation();
		s.$body.removeClass('is_active-ocm');
		s.$clickClose.removeClass('ocm-page-close');		
	}
	
};