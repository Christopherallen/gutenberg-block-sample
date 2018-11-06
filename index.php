<?php
/**
 * Plugin Name: Gutenberg Block Sample
 * Version: 1.0.0
 * Description: Outputs Fresh Logo
 * Author: Fresh Consulting
 * Author URI: https://freshconsulting.com
 * Text Domain: fresh-template-view
 * @package fresh-template-view
 */

if( ! defined( 'ABSPATH' ) ) {
	return;
}


/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 */
function fresh_block_enqueue() {
	wp_enqueue_script(
		'fresh_block_enqueue',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);
}

add_action( 'enqueue_block_editor_assets', 'fresh_block_enqueue' );
