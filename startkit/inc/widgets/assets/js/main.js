jQuery( document ).ready( function( $ ) {

		/* Social widget handlers */
		$(document).on("live click", "input.widget-control-save", function(e) {
	  		setTimeout(function(){	  			
	  			$('.mks-social-sortable').find('.iconPicker').fontIconPicker();
				$('.info-icon-picker').find('.iconPicker').fontIconPicker();
	  		},1000);
	  		$('input.widget-control-save').attr('disabled', 'disabled');
			return false;
		});
		
		$('.mks-social-sortable').find('.iconPicker').fontIconPicker();
		$('.info-icon-picker').find('.iconPicker').fontIconPicker();
		$("body").on("click", "a.mks_add_social", function(e) {
			e.preventDefault();

			var widget_holder = $(this).closest('.widget-inside');
			var cloner = widget_holder.find('.mks_social_clone');

			widget_holder.find('.mks_social_container').append('<li>' + cloner.html() + '</li>');
			widget_holder.find('.mks_social_container .iconPicker').fontIconPicker();
			$(this).trigger('change');
		});

		$("body").on("click", ".mks-remove-social", function(e) {
			var delete_item = confirm('Are you sure you want to delete this icon?');
			delete_item ? $(this).closest('li').remove() : '';
			$('.mks-social-sortable').trigger('change');
		});

		$("body").on("mousedown", ".mks-social-sortable li", function(e) {
			$('.mks-social-sortable').trigger('change');
		});

		/* Init sortable */
		mks_social_sortable();

		$(document).on('widget-added', function(e) {
			mks_social_sortable();
		});

		$(document).on('widget-updated', function(e) {
			mks_social_sortable();
		});

		/*  Sortable function */
		function mks_social_sortable() {
			$(".mks-social-sortable").sortable({
				revert: false,
				cursor: "move",
				delay: 100,
				placeholder: "mks-social-sortable-drop"
			});
		}

});