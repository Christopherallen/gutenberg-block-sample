( function() {
	const { __ } = wp.i18n;
	const { registerBlockType } = wp.blocks;
	const { RichText } = wp.editor;

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
			attributes: {
				textString: {
					type: 'array',
					source: 'children',
					selector: 'h2',
				}
			},

			// Defines the block within the editor.
			edit: ( props ) => {
				const { attributes: { 	textString }, className, setAttributes } = props;
				const onChangeContent = ( newContent ) => {
					setAttributes( { textString: newContent } );
				};

				return (
					<div className={ className }>
						<RichText
							tagName="h2"
							value={ textString }
							onChange={ onChangeContent  }
							placeholder="Enter your text here!"
							/>
					</div>
				);
			},

			// Defines the saved block.
			save: ( props ) => {
				return <RichText.Content tagName="h2" value={ props.attributes.textString } />;
			},
		}
	);
})();
