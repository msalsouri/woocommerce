let config = require( '../../playwright.config.js' );
const { devices } = require( '@playwright/test' );

config = {
	...config,
	projects: [
		{
			name: 'default pressable',
			use: { ...devices[ 'Desktop Chrome' ] },
			testMatch: [
				'**/basic.spec.js',
				'**/merchant/products/add-variable-product/**/*.spec.js',
				'**/activate-and-setup/**/*.spec.js',
				'**/merchant/products/block-editor/**/*.spec.js',
				'**/admin-analytics/**/*.spec.js',
				'**/admin-marketing/**/*.spec.js',
				'**/admin-tasks/**/*.spec.js',
				'**/customize-store/**/*.spec.js',
				'**/merchant/command-palette.spec.js',
				'**/merchant/create-cart-block.spec.js',
				'**/merchant/create-checkout-block.spec.js',
				'**/merchant/create-coupon.spec.js',
				'**/merchant/create-order.spec.js',
				'**/shopper/account-email-receiving.spec.js',
				'**/shopper/add-to-cart.spec.js',
				'**/shopper/cart-block-calculate-shipping.spec.js',
				'**/shopper/cart-block-coupons.spec.js',
				'**/shopper/cart-block.spec.js',
				'**/shopper/cart-calculate-shipping.spec.js',
				'**/shopper/cart-checkout-block-calculate-tax.spec.js',
				'**/shopper/cart-checkout-calculate-tax.spec.js',
				'**/shopper/cart-checkout-coupons.spec.js',
				'**/shopper/cart-checkout-restricted-coupons.spec.js',
				'**/shopper/cart-redirection.spec.js',
				'**/shopper/cart.spec.js',
				'**/shopper/checkout-block-coupons.spec.js',
				'**/shopper/checkout-block.spec.js',
			],
			grepInvert: /@skip-on-default-pressable/,
		},
	],
};

module.exports = config;
