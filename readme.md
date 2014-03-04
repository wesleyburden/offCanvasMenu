
# Readme
I've put this together as a starting point for development.  You won't find any pretty design, just the functionality you need to get it working so you can style it within your project.  It's designed to be as light as possible, progressively enhanced and all that good stuff.  I'm open to any suggestions or improvements...

## Usage
Check out _demo.html_ to get a picture of how this works.  Here are a few notes to help out.

1. Link up _offCanvasMenu.css_ in your pages head section (or add it to your build process to concatenate for extra speedy goodness).
2. Add jQuery followed by _jquery.offCanvasMenu-0.1.js_ in the footer of your page using script tags.
3. Initialise the plugin with this code (place below the plugin's script tag):

	$(document).ready(function() {
		OffCanvasMenu.init();		
	});
 
### Some notes:
For this to work properly there are some requirements to how you structure your code:

1. _div#ocm-outer-page-wrapper_ should wrap all your page content and is used to mask the content and stop scroll bars appearing when the menu is active.
1. _div#ocm-page-wrapper_ should be around all your content that you want to shift over when the menu is shown.  Generally this would be placed directly after _div#ocm-outer-page-wrapper_ but you may choose to exclude the footer from moving when the menu is shown by closing _div#ocm-page-wrapper_ before the footer.
1. Wrap your menu in _nav.main-menu_.  This is what will be pushed off screen using some absolute positioning*.
1. If javascript is disabled the menu will just display in it's natural position within the markup.  You can get fancy and use :target to hide and show the menu without javascript although this is only supported in IE9+.  More info in (this CSS Tricks article)[http://css-tricks.com/off-canvas-menu-with-css-target/].

*The absolute positioning allows for a height of 100% making for a full height background to the menu area.  Be careful declaring position on any of .main-menu's parent elements as this will affect it's positioning.  _position: relative;_ is set on _#page-wrapper_.

## Roadmap
Add swipe close (and maybe open?) functionality for touch devices 

## Credits
Made by (https://twitter.com/wesleyburden)[Wesley Burden] with help from cleverer people than me.

This is heavily based on [David Bushell's](http://dbushell.com/‎) code from [this article on Smashing Magazine](http://coding.smashingmagazine.com/2013/01/15/off-canvas-navigation-for-responsive-website/)