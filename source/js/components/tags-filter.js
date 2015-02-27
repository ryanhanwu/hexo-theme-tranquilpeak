+function ($) {
	'use strict';

	/**
	 * TagsFilter
	 *
	 * @param tagsArchivesElem
	 * @constructor
	 */
	var TagsFilter = function (tagsArchivesElem) {
		this.$inputSearch = $(tagsArchivesElem + ' #filter-form input[name=tag]');
		this.tags         = tagsArchivesElem + ' .a-tag';
		this.posts        = tagsArchivesElem + ' .a-posts';
		this.$tags        = $(this.tags);
		this.$posts       = $(this.posts);
	};

	/**
	 * Init tags filter
	 */
	TagsFilter.prototype.init = function() {
		var self = this;

		self.$inputSearch.keyup(function () {
			self.filter(self.getSearch());
		})
	}

	/**
	 * Get the search entered by user
	 */
	TagsFilter.prototype.getSearch = function() {
		return this.$inputSearch.val().replace('.', '__').toLowerCase();
	};

	/**
	 * Show related posts and hide others
	 *
	 * @param tag
	 */
	TagsFilter.prototype.filter = function(tag) {
		if (tag == '') {
			this.showAll();
		}
		else {
			this.hideAll();
			this.showPosts(tag);
		}
	};

	/**
	 * Show all posts form a tag
	 * @param tag
	 */
	TagsFilter.prototype.showPosts = function(tag) {
		$(this.tags + '[data-tag*=' + tag + ']').show();
		$(this.posts + '[data-tag*=' + tag + ']').show();
	};

	/**
	 * Show all posts from all tags
	 */
	TagsFilter.prototype.showAll = function() {
		this.$tags.show();
		this.$posts.show();
	};

	/**
	 * Hide all posts from all tags
	 */
	TagsFilter.prototype.hideAll = function() {
		this.$tags.hide();
		this.$posts.hide();
	};

	$(document).ready(function() {
		var tagsFilter = new TagsFilter('#tags-archives');
		tagsFilter.init();
	})
}(jQuery);