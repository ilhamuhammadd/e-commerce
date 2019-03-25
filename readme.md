#E-Commerce

##router admin
| Route                 | HTTP      | Header(s)     | Body      | Description     |
|-----------------------|:---------:|:-------------:|:----------|----------------:|
| /admin/signin          |POST       | none          | username:String(Required),password:String(Required)                             |Sign in admin |
| /admin/products          |GET       | token: String          | none                        |Read all products |
| /admin/products          |POST       | token: String          | name:String(Required),imageUrl:String(Required),price:number(Required),stock:number(Required)                     | Create a product |
| /admin/products/:id        |PUT       | token: String          | name:String(Required),imageUrl:String(Required),price:number(Required),stock:number(Required)                        | Edit a product |
| /admin/products/:id        |DELETE       | token: String          | name:String(Required),imageUrl:String(Required),price:number(Required),stock:number(Required)                        | Delete a product |


## router user
| Route                 | HTTP      | Header(s)     | Body      | Description     |
|-----------------------|:---------:|:-------------:|:----------|----------------:|
| /user/signup          |POST       | none          | email:String(Required),password:String(Required)                             |Sign up user |
| /user/signin          |POST       | none          | email:String(Required),password:String(Required)                             |Sign in user |
| /user/products        |GET        | token: String          | none                        |Read all products |
| /user/products        |PUT        | token: String          | id:String(Required)                      | Buy a product |
| /user/products/cart   |GET        | token: String          | none                     | Read all cart |
| /user/products/cart/:id       |PUT       | token: String          | id:String(Required)                        | Pay the product that you want it |
| /user/products/cart       |PUT       | token: String          | id:String(Required)                        | Delete a product at shooping cart |
| /user/products/chekcouts/        |GET       | token: String          | none                        | List all product you bought |

## router product

