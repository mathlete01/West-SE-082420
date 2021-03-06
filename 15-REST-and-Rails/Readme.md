# REST and Rails
## SWBAT
- Define REST and how it works with HTTP
- Create a new Rails application
- Describe similarities between Sinatra routing & Rails routing
- Generate a controller
- Create actions/methods for a RESTful controller
- Create views
- Generate a model
- Create routes

## REST & CRUD
| HTTP        | CRUD          | Route
| ----------- | ------------- |----------------------|
| GET         | READ          | get '/candies'       |
| GET         | READ (one)    | get '/candies/:id'   |
| POST        | CREATE        | post '/candies'      |
| PUT/PATCH   | UPDATE        | patch '/candies/:id' |
| DELETE      | DESTROY       | delete '/candies/:id'|

## CHEAT SHEET
### What is pluralized?
- Everything but the Model 

### How can I find out if my word is pluralized?
```
'word'.pluralized
```

### Where are my....???
- Models
    - app/models
- Controllers
    - app/controllers
- Views
    - app/views
- Routes
    - config/routes 

- Migrations 
    - db/migrate

- Seeds
    - db/seeds

### How do I make a new rails app?
```
rails new app_name
```

### How do I use rails generators 
#### DO NOT USE
```
rails generate scaffold 
```
- this will do everything for you and you are not aloud to use it until after mod-2, you must first learn how rails works, it generates a lot of files you don't need or know how to use yet so it's very obvious when you use it. **It is forbidden on the Code  Challenges and Projects**

#### DO USE

```
rails g model NameOfModel column_name:datatype column_name2:datatype2
```
- will create model and migration
```
rails g controller name_of_controller
```
- will cerate migration
```
rails g migration add_new_column_name_to_table_name column_name:datatype 
```
- adds a new column
```
rails g migration remove_column_name_from_table_name column_name:datatype
```
- removes a column

```
rails g resource ModelName column_name:datatype column_name2:datatype2
```
- will create model, controller, views and routes

### Routes 
```
#method 'route', to: 'controller#action'
get '/candy_stores', to: 'candy_stores#show'
```
- custom route
```
#resources :model_name 
resources :candy_stores
```
- all routes 
```
resources :model_name. only: [:index, :show, :new, :create, :edit, :update, :delete, :destroy]
resources( :candy_stores, {only: [:index]})
```
- specific routes (use this one)



