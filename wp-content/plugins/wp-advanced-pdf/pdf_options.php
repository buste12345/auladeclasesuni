<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>
<div class="wrap">
	<div class="icon32" id="icon-options-general"></div>
	<a href="http://cedcommerce.com/wordpress-plugins/wp-advanced-pdf-pro" target="_blank"><img src="<?php echo PTPDF_URL?>/asset/images/plugin-update.png" width="1024px" height="300px"></a>
	<h2> <?php _e('WP Advanced PDF Settings', 'wp-advanced-pdf'); ?></h2>
	<div class="updated below-h2" id="wppdf_message"></div>
	<div id="gde-tabcontent">
		<?php
		
		?><form method="post" name="WPPDF" action="options.php">
			<div id="gencontent" class="gde-tab gde-tab-active">
			<?php ptpdf_show_tab('general'); ?>
		</div>
		</form>

	</div>
</div>
<?php

function ptpdf_show_tab( $name ) {
	$tabfile = PTPDF_PATH . "/libs/wpppdf-tab-$name.php"; // die($tabfile);
	if (file_exists ( $tabfile )) {
		include_once ($tabfile);
	}
}
function ptpdf_profile_option( $option, $value, $label, $helptext = '' ) {
	echo "<option value=\"" . esc_attr ( $value ) . "\"";
	if (! empty ( $helptext )) {
		echo " title=\"" . esc_attr ( $helptext ) . "\"";
	}
	if ($option == $value) {
		echo ' selected="selected"';
	}
	echo ">$label &nbsp;</option>\n";
}
function ptpdf_profile_checkbox($val, $field, $default='1', $wrap='',  $label= '', $br = '', $disabled = false ) {
	if (! empty ( $wrap )) {
		echo '<span id="' . esc_attr ( $wrap ) . '">';
	}
	echo '<input type="checkbox" id="' . esc_attr ( $field ) . '" name="' . esc_attr ( $field ) . '"';
	if (($val == $default) || ($disabled)) {
		echo ' checked="checked"';
	}
	if ($disabled) {
		// used only for dx logging option due to global override in functions.php
		echo ' disabled="disabled"';
	}
	
	echo ' value="' . esc_attr ( $default ) . '"> <label for="' . esc_attr ( $field ) . '">' . htmlentities ( $label ) . '</label>';
	if (! empty ( $br )) {
		echo '<br/>';
	}
	if (! empty ( $wrap )) {
		echo '</span>';
	}
}
?>