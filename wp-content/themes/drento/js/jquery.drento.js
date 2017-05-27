(function($) {
	"use strict";
	$(document).ready(function() {
		function setNano() {
			if ($(window).width() > 767) {
				$(".nano").nanoScroller({ preventPageScrolling: true });
			}
		};
		setNano();
		$(window).resize(function() {
			setNano();
		});
		/*-----------------------------------------------------------------------------------*/
		/*  Home icon in main menu
		/*-----------------------------------------------------------------------------------*/ 
			if($('body').hasClass('rtl')) {
				$('.main-navigation .menu-item-home:first-child > a').append('<i class="fa fa-home spaceLeft"></i>');
			} else {
				$('.main-navigation .menu-item-home:first-child > a').prepend('<i class="fa fa-home spaceRight"></i>');
			}
		/*-----------------------------------------------------------------------------------*/
		/*  If Comment Metadata exist or Edit Comments Link exist
		/*-----------------------------------------------------------------------------------*/ 
			if ( $( '.comment-metadata' ).length ) {
				$('.comment-metadata').addClass('smallPart');
			}
			if ( $( '.reply' ).length ) {
				$('.reply').addClass('smallPart');
			}
		/*-----------------------------------------------------------------------------------*/
		/*  Detect Mobile Browser
		/*-----------------------------------------------------------------------------------*/
			var mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		/*-----------------------------------------------------------------------------------*/
		/*  Manage Sidebar
		/*-----------------------------------------------------------------------------------*/ 
			$('.main-sidebar-box, .opacityBox').click(function() {
				$('.widget-area, .main-sidebar-box, body, .opacityBox').toggleClass('sidebar-open');
				$('body').toggleClass('menu-opened');
				setTimeout(function(){
					$('body').removeClass('menu-opened');
				}, 500);
			});
		/*-----------------------------------------------------------------------------------*/
		/*  Manage Search
		/*-----------------------------------------------------------------------------------*/
			$('.drentoSearch').click(function() {
				$('.drentoSearchFull, body, .drentoSearch').toggleClass('search-open');
				if($('.drentoSearch').hasClass('search-open')) {
					$(this).html('<i class="fa fa-times fa-2x"></i>');
				} else {
					$(this).html('<i class="fa fa-search fa-2x"></i>');
				}
			});
		/*-----------------------------------------------------------------------------------*/
		/*  Manage Social
		/*-----------------------------------------------------------------------------------*/
			$('.drentoSocial').click(function() {
				$('.socialLine, body, .drentoSocial').toggleClass('social-open');
				if($('.socialLine').hasClass('social-open')) {
					$(".socialLine a").each(function(index) {
						$(this).delay(100*index).css('display', 'block').hide().fadeIn(300);
					});	
				} else {
					$('.socialLine a').fadeOut(200);
				}
			});
		/*-----------------------------------------------------------------------------------*/
		/*  Menu Widget
		/*-----------------------------------------------------------------------------------*/
			if ( $( 'aside ul.menu' ).length ) {
				$('aside ul.menu').find("li").each(function(){
					if($(this).children("ul").length > 0){
						$(this).append("<span class='indicatorBar'></span>");
					}
				});
				$('aside ul.menu > li.menu-item-has-children .indicatorBar, .aside ul.menu > li.page_item_has_children .indicatorBar').click(function() {
					$(this).parent().find('> ul.sub-menu, > ul.children').toggleClass('yesOpenBar');
					$(this).toggleClass('yesOpenBar');
					var $self = $(this).parent();
					if($self.find('> ul.sub-menu, > ul.children').hasClass('yesOpenBar')) {
						$self.find('> ul.sub-menu, > ul.children').slideDown(300);
					} else {
						$self.find('> ul.sub-menu, > ul.children').slideUp(200);
					}
				});
			}
		/*-----------------------------------------------------------------------------------*/
		/*  Mobile Menu
		/*-----------------------------------------------------------------------------------*/ 
			if ($( window ).width() <= 1024) {
				$('.main-navigation').find("li").each(function(){
					if($(this).children("ul").length > 0){
						$(this).append("<span class='indicator'></span>");
					}
				});
				$('.main-navigation ul > li.menu-item-has-children .indicator, .main-navigation ul > li.page_item_has_children .indicator').click(function() {
					$(this).parent().find('> ul.sub-menu, > ul.children').toggleClass('yesOpen');
					$(this).toggleClass('yesOpen');
					var $self = $(this).parent();
					if($self.find('> ul.sub-menu, > ul.children').hasClass('yesOpen')) {
						$self.find('> ul.sub-menu, > ul.children').slideDown(300);
					} else {
						$self.find('> ul.sub-menu, > ul.children').slideUp(200);
					}
				});
			}
			$(window).resize(function() {
				if ($( window ).width() > 1024) {
					$('.main-navigation ul > li.menu-item-has-children, .main-navigation ul > li.page_item_has_children').find('> ul.sub-menu, > ul.children').slideDown(300);
				}
			});
		/*-----------------------------------------------------------------------------------*/
		/*  Detect Mobile Browser
		/*-----------------------------------------------------------------------------------*/ 
			if ( !mobileDetect ) {
				/*-----------------------------------------------------------------------------------*/
				/*  Scroll To Top
				/*-----------------------------------------------------------------------------------*/ 
					$(window).scroll(function(){
						if ($(this).scrollTop() > 700) {
							$('#toTop').fadeIn();
						} 
						else {
							$('#toTop').fadeOut();
						}
					}); 
					$('#toTop').click(function(){
						$("html, body").animate({ scrollTop: 0 }, 1000);
						return false;
					});
			}
	});
})(jQuery);