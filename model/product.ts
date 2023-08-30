export class Product {
productId?: number
name?: string
description?: string
price?: number

}

// the ? makes properties optional  - required as we want to create a product before we know all the values
//on project would usually create a separate 'productSession' object which has optional values and map to this 'product' which doesnt have 
//optional values at the end  of the flow