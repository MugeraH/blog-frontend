# Vue-Blog
## Description
This is a blog website made using vue js for the front-end and python django for backend 

## Author

[Mugera Hughes](https://github.com/mugerah/)


## User Story

1. Sign in to the application to start using.
2. View diffrent blogs.
3. Create,Update and delete a blog.
4. Filter through blogs by category.



## Behaviour Driven Development (BDD)

1. Sign Up

| Behaviour              |                Input                 |                               Output |
| ---------------------- | :----------------------------------: | -----------------------------------: |
| Allow user to register | user details email,username,password | User account and profile are created |

2. Login

| Behaviour                                |         Input         |                                                                                  Output |
| ---------------------------------------- | :-------------------: | --------------------------------------------------------------------------------------: |
| Allow user to login into the application | Username and password | If user is registered and has correct credentials he/she is redirected to the home page |

3. Create Blog

| Behaviour                   |          Input           |                                                                                                       Output |
| --------------------------- | :----------------------: | -----------------------------------------------------------------------------------------------------------: |
| Create blog | Click create blog on navbar and fill in create blog form | User gets redirected to m is filled the new blog post is added |

4. Edit Blog

| Behaviour                 |                                 Input                                 |                                            Output |
| ------------------------- | :-------------------------------------------------------------------: | ------------------------------------------------: |
| Edit blog | Click edit blog button in blog view page | Edit blog content in edit blog form |

5. Delete blog

| Behaviour                    |    Input    |                        Output |
| ---------------------------- | :---------: | ----------------------------: |
| Delete blog | Click delete blog button and confirm delete | Blog gets deleted |

6. Group blog

| Behaviour                          |  Input  |                         Output |
| ---------------------------------- | :-----: | -----------------------------: |
| Group blogs by category | click blog category in blogs page |Blogs displayed are filtered through by their category|


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Contact Information

For any further inquiries or contributions or comments, reach me at [Mugera Hughes](https://github.com/MugeraH)


### License

[MIT License](https://github.com/MugeraH/blog-frontend/blob/main/license)

Copyright (c) 2021
