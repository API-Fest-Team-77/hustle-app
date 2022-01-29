# Hustle App
## Important note-

We have deployed our backend on heroku. You can check it out in the postman workspace

## Inspiration

We all come across cool ideas that can bring about a change and make life easy but it eventually dies when we fail to collect investments. And for that reason we are building HUSTLE, that can bring you the investors that You deserve 

## What it does

Hustle enables you to post your ideas, get upvotes for your ideas, get investors and follow people with great ideas under their sleeves. 

## How we built it

Everyone in our team wore multiple hats. We all collaborated together. We coded in different branches and merged them at the end.

## Challenges we ran into

Building APIs was pretty new to most of the team members and we had to work together to make sure the variables and all the code is built perfectly

## Accomplishments that we're proud of

Our strong collaboration and teamwork that made it possible to complete the project on time. We worked on different stacks and learnt a lot along the journey.

## What we learned

We learnt to deploy API using postman and also learnt to build a full stack application. Collaboration is a very important aspect and we learnt it while working as a team together. It reminded us of the quote "Collaboration First Code Second"-by Eddie Jaoude.

## Routes defined

- POST /api/auth/signup 
- POST /api/auth/login
- PUT /api/users/:id (update user profile)
- DELETE /api/users/:id (delete user)
- GET /api/users/:id (Get a user profile)
- PUT /api/users/:id/follow (follow a user)
- PUT /api/users/:id/unfollow (unfollow a user)
- POST /api/posts (create a post)
- PUT /api/posts/:id (update a post)
- DELETE /api/posts/:id (delete a post)
- PUT /api/posts/:id/like (like a post)
- GET /api/posts/timeline (returns posts based on user's following)
- GET /api/posts/:id (returns a post with id)
