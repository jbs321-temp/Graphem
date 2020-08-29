###Senior Developer Technical Examination 
## User Stories and Progress Status
Install Laravel and a way to run it on your device, you can use Homestead 
- [done]

Configure it to connect to a local MySQL database called "codetest", where you
will put your data.
- [done]

Create a Controller so that this URL will work: "http://local/myheroes/” (local is
just an example; it is whatever the docroot is). This page should show “My
Teams”.

- [done]

Create a view using Blade that has a very simple form:
* Super Hero Name
* Side (2 options: light, dark)
* Hit Points
* Attack
* Special Ability

- [done]

Make that viewable on the following route: /myheroes/createhero/.
Heroes do not need to be editable once created.
* That form should post to the controller and store the hero in the database.
* Once posted, it should display a success message and allow the user to create
more.

- [done]

7) Create a new page on the following route: /myheroes/createteam.
a) This page will have a list of available heroes that were created and a list
called “My Team”.

- [done]


## From this point down the tasks are incomplete and missing work

- The user should be able to create either a “Dark” side team or a “Light” side team.
- Limit the team size to 3-5 heroes.
- Heroes can be added to the team or removed.
- Once created the team doesn’t need to be editable.
- Come up with a way to calculate a superhero’s combat power. 
- The team should have a combat power that is the sum of all heroes selected on the team.

### Questions Answered
- How do you prioritize your effort in trying to complete the project?
- I was prioritizing the project into 2 phases:
 * phase 1 was to create the Hero page including front and back end. with appropriate validation.
 * phase 2 was to upgrade the logic to create teams
 * phase 3 to create the calculation for tean powers
  
- You kept enough time to finish your documentation at the end.
- I left 30 minutes for documentation.

- How do you utilize Laravel and its libraries?
- Back-End: I used the laravel stack
- Front-End: See packagist for more details, I added mainly react-reduct and reduct-form to crate a easier stateless single page app. (I lost some time bootstrapping it). 
  I'm more familiar with react so I used that js framework. for visual design I used simple bootstrap per requirements.

- What were you able to complete?
- See description of user stories above

- What you feel is still needed?
- See description of user stories above
 
- What would you do differently?
- I think I would invest more on the backend first as its my stornger side (I was trying to achieve visual results)

- What would you add to the points listed below?
* Controller - I dont put business logic in it, I would keep controllers as simple as possible and similar to each other. 
  I would implement authentication using Laravel prebuild authentication and add passport for autherization for api security.
  
* Model - I would hide the id's or scramble them so client side won't have them visible. I would add documentation what are the entities/models in the code.
          I would normalize the Database as it grows and so I would have distinct mopels accordingly. I would add comments on tables to explain them.
     
* View - The view is heanded off to react, I would only secure the views with the authentication.

* Code - I will add code and commentary on methods, I would separate responisibilities using design patterns like: repositories, services to make it easier to read the code and now why its there for. 

As a general note I would start from writing tests, implementing the security features and then the rest of the code. 

Thank you,

Jacob Balabanov. 
