/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global console:false */

'use strict';

import ClassicEditor from '/ckeditor5/editor-classic/classic.js';

ClassicEditor.create( document.querySelector( '#editor' ), {
	features: [ 'delete', 'enter', 'typing', 'headings' ],
	toolbar: [ 'headings' ]
} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );