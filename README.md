# Hustle App

## Important note-

We have deployed our backend on heroku. You can check it out in the postman workspace

[Postman workspace](https://www.postman.com/bold-eclipse-682454/workspace/hustle-api)

![screenshot of postman workspace](https://user-images.githubusercontent.com/61219881/151659764-0f848752-a818-4e29-8dd5-d6473cd824f7.png)

## Inspiration

We all come across cool ideas that can bring about a change and make life easy but it eventually dies when we fail to collect investments. And for that reason we are building HUSTLE, that can bring you the investors that You deserve 

## What it does

Hustle enables you to post your ideas, get upvotes for your ideas, get investors and follow people with great ideas under their sleeves. 

## How we built it

Our techstack was Mongo DB, Express.js ,React.js and Node.js .Everyone in our team wore multiple hats. We all collaborated together. We coded in different branches and merged them at the end.

## Challenges we ran into

Building APIs was pretty new to most of the team members and we had to work together to make sure the variables and all the code is built perfectly

## Accomplishments that we're proud of

Our strong collaboration and teamwork that made it possible to complete the project on time. We worked on different stacks and learnt a lot along the journey.

## What we learned

We learnt to deploy API using postman and also learnt to build a full stack application. Collaboration is a very important aspect and we learnt it while working as a team together. It reminded us of the quote "Collaboration First Code Second"-by Eddie Jaoude.

## Routes defined


### Base URL: https://hustle-app-api-fest.herokuapp.com/

- POST /api/auth/signup 
This route is used to signup, for signing up user will have to provide at least username, email and password.

- POST /api/auth/login
This route is used to login into the app, It will take username and password and return the user object.

- PUT /api/users/:id (update user profile)
This route is used to update a user profile, User can update only his/her/their/its profile, so it'll take userId in request body as well as in query.

- DELETE /api/users/:id (delete user)
This route is used to delete a user profile, It takes the same parameters as update.

- GET /api/users/:id (Get a user profile)
This route is used to get a user profile, It requires the id in order to find a user profile.

- PUT /api/users/:id/follow (follow a user)
This route is used to follow a user, Suppose person A wants to follow Person B, than this endpoint takes person A's userId as request body parameter and person B's userId as request query parameter.

- PUT /api/users/:id/unfollow (unfollow a user)
This route is used to unfollow a user, It works the same as follow-endpoint.

- POST /api/posts (create a post)
This route is used to create a post, In order to create a new post, This endpoint will atleast require  userId, title and content of the post.

- PUT /api/posts/:id (update a post)
This route is used to update an existing post, It takes the id of post as request query parameter and userId of user as request body parameter, User can only update his/her/their/its post.

- DELETE /api/posts/:id (delete a post)
This route is used to delete an existing post, It works the same as update post.

- PUT /api/posts/:id/like (like a post)
This route is used to like the post, It takes userId of person who wants to like the post as request body parameter.

- GET /api/posts/timeline (returns posts based on user's following)
This route retrievs the feed posts / timeline of a user. It retrieves his/her/their/its post and the posts of the people he/she/they/it follows.

- GET /api/posts/:id (returns a post with id)
This route takes a id of post and returns that post as object.
