/**
 * @namespace
 * @name validity.ui
 */
var validity = (function(validity) {
	var ui = {},
		icons = {
			'default': 'img/html_valid.png',
			'connecting': 'img/connect.png',
			'valid': 'img/accept.png',
			'invalid': 'img/html_delete.png',
			'error': 'img/exclamation.png'
		};

	ui.init = function(tabId) {
		//	Set up page action on new tabs
		ui.setPageAction(tabId, 'default', 'Validate Document (Alt+Shift+V)');
	}

	ui.setPageAction = function(tabId, icon, text) {
		chrome.pageAction.show(tabId);
		chrome.pageAction.setIcon({'tabId': tabId, 'path': icons[icon]});
		if (typeof text === 'string') {
			chrome.pageAction.setTitle({'tabId': tabId, 'title': text});
		}
	}

	validity.ui = ui;
	return validity;
})(validity || {});