// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/bootstrap
//= require_tree .

// Parallax images
	function parallax() {
		var parlx_1 = document.getElementById('prlx_1');
		var parlx_2 = document.getElementById('prlx_2');
		parlx_1.style.top = -(window.pageYOffset / 4)+'px';
		parlx_2.style.top = -(window.pageYOffset / 8)+'px';
	}
		window.addEventListener("scroll", parallax, false); 



