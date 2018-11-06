( function() {
	const __ = wp.i18n.__;
	const createElement = wp.element.createElement;
	const registerBlockType = wp.blocks.registerBlockType;

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             xotherwise "undefined".
	 */
	registerBlockType(
		'fresh/static-block-example',
		{
			title: __( 'Fresh Static Block' ),
			icon: 'lock',
			category: 'common',

			// Defines the block within the editor.
			edit: function( props ) {
				return createElement(
					'div',
					{
						className: props.className,
					},
					'Fresh Consulting Static Gutenberg Block.'
				);
			},

			// Defines the saved block.
			save: function( props ) {
				return createElement(
					'div',
					{
						className: props.className,
					},
					'Fresh Consulting Static Gutenberg Block.'
				);
			},
		}
	);
})();
