---
post_title: DOM Events sent from product collection block
menu_title: DOM Events
tags: how-to
---

# Product Collection - DOM Events

## `wc-blocks_product_list_rendered`

This event is triggered when Product Collection block was rendered or re-rendered (e.g. due to page change).

### `detail` parameters

| Parameter          | Type    | Default value | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | string | `undefined`       | Collection type. It's `undefined` for "create your own" collections as the type is not specified. For other Core collections it can be one of type: `woocommerce/product-collection/best-sellers`, `woocommerce/product-collection/featured`, `woocommerce/product-collection/new-arrivals`, `woocommerce/product-collection/on-sale`, `woocommerce/product-collection/top-rated`. For custom collections it will hold their name. |

### Example usage

```javascript
window.document.addEventListener(
  'wc-blocks_product_list_rendered',
  ( e ) => {
    const { collection } = e.detail;
    console.log( collection ) // -> collection name, e.g. woocommerce/product-collection/on-sale
  }
);
```
