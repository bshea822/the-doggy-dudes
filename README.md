# README

[ ![Codeship Status for bshea822/the-doggy-dudes](https://app.codeship.com/projects/30b32ed0-bb41-0136-ecb4-166978af4b72/status?branch=master)](https://app.codeship.com/projects/312596)

# The Doggy Dudes

The Doggy Dudes is a business based in Deerfield, IL.  This web application is designed to provide customers with information on the company's services.  Customers can also sign in to make appointments for the company's services, and set up monthly subscriptions.

# Motivation

Last year, my brother started a company that provides a pick-up service for people's dogs and brings them to a private park to play.  In January of 2018, I decided to become a private investor in his business by providing funding as well as my services to his business.  While we had a website that was functional, it had very little functionality for visitors.  This updated website is meant to help integrate our customers with the services we provide.


# Screenshots

# Frameworks Used

  - Ruby on Rails
  - React

# Features

# Installation

# API Reference

# Tests

# Launch Academy Rubric

## Criteria

  - App must have a Rails backend.
  - At least one part of the app (i.e., the index page) needs to have a React frontend.
  - The app is based in CRUD e.g. has a user creating, updating, reading, and destroying some resource.
  - There is a minimum of 3 tables in the proposed ER Diagram.
  - Has an "X-Factor" feature, that show original thought and makes the application unique.

## User Stories

    As an unauthenticated user
    I want to see a home page, with links to "About Us", "Services", "Forms"
    So that I can learn about the company

      Acceptance Criteria:
      * There is an option to click on any of the three links if I'm not already authenticated
      * If I click on "About Us", I should see a description of the company
      * If I click on "Services", I should see a list of services and a map depicting the geographical serviceable area

    As an unauthenticated user
    I want to see a home page, with pictures from the company's Instagram
    So I can see happy doggos

      Acceptance Criteria:
      * Pictures from the company's Instagram are display on the home page
      * The pictures are displayed in the form of a carousel
      * The pictures are cute

    As an unauthenticated user
    I want to see a map of the company's service area
    So I will know if this service applies to me

      Acceptance Criteria:
      * On the "Services" page there should be an integrated Google map
      * The map should have a circle over-layed, that shows the serviceable area

    As an unauthenticated user
    I want to sign up
    So that I can make a account

      Acceptance Criteria:
      * There is an option to sign in on the page if I am not already authenticated
      * I am presented with a form that asks for: first name, last name, email address, phone number, physical address, password, and password confirmation
      * If I've entered the right credentials, I receive an onscreen message saying that I created an account and am signed in
      * If I didn't enter valid credentials I: receive an onscreen error message, am left unauthenticated, and am left on the form page with my information still in the form
      * If I am already authenticated I don't have the option to sign in

    As a user
    I want to be able to view my profile
    So I can review my account details and scheduled pickups

      Acceptance Criteria:
      * There should be an option to view the user's account
      * The page should show the user's account details
      * The page should also show the user's scheduled appointments with the company's service

    As a user
    I want to be able to edit or destroy my profile
    So I can make changes relevant to the company's services

      Acceptance Criteria:
      * In the account profile page, there is an option to edit my profile
      * If I click on the link, it will bring me present me with a form to change my account details
      * In the account profile page, there is an option to delete my profile
      * If I click on the link, it will ask me to confirm my decision by entering my password
      * If I confirm, my account info is deleted, I become unauthenticated, and am brought to the home page

    As a user
    I want to be able to add a dog to my profile
    So I can either schedule pickups or schedule a free trial

      Acceptance Criteria:
      * In the account profile page, there is an option to "add a dog"
      * If I click on the link, it will present a form that asks for basic info about the dog
      * The form will also include a Terms of Service & Client Agreement that the user must agree to
      * If I've entered the right credentials, I receive an onscreen message saying that I added a dog and am redirected to my account profile page where the new dog is visible
      * If I didn't enter valid credentials I: receive an onscreen error message and am left on the form page with my information still in the form

    As a unauthenticated user
    I want to be able to schedule a free trial for my a dog
    So I can try out the provided service

      Acceptance Criteria:
      * I should see an option for a free trial
      * If I follow the link I should be brought to a page that asks me to sign up or sign in
      * If I sign in, if I have already used the service or free trial I am redirected to my account profile with an error message
      * If I sign in and have not used the free trial or service, I will be prompted to create a dog if there are none in my account or to select a dog if there is
      * Once a dog has been created or selected I can schedule an appointment by selecting a date and play group time

    As a user
    I want to be able to schedule my dog for a pickup
    So they can have fun

      Acceptance Criteria:
      * I should see an option to schedule appointments
      * If I follow the link, it should first ask me to select a dog or create a new dog
      * If I need to create a new dog, I am redirected to the "add a dog" page, where upon creation I can continue to select a pickup date and time
      * If I selected a dog, I will be directed to the pickup schedule page

    As a user
    I want to be able to edit or delete my scheduled pickup appointment
    If I have a scheduling conflict

      Acceptance Criteria:
      * On my account page I should see my schedule appointments
      * Each appointment should have the option to be edited or deleted
      * If I edit my appointment, the page displays the changes made
      * I will have the option to delete(cancel) singular appointments, or clear the entire schedule
      * If an appointment is deleted within 24 hours of the scheduled pickup time, I am charged a late cancellation fee
      * If I delete any of my appointments, the page displays the changes made

    As an admin
    I want to be able to view my customers' details
    So I can be informed of any changes

      Acceptance Criteria:
      * On the admin account page, I should be able to see a list of customers
      * Each customer should be a link, that leads me to a page that shows their info, dogs, and scheduled pickups

    As an admin
    I want to be able to edit or delete my customers' details
    So I can make changes on their behalf if they request it

      Acceptance Criteria:
      * In each customer's detail page, I should be able to edit or delete information related to their account, dogs, or appointments
      * If I edit a customer's information, the page displays the changes
      * If I delete a customer's information, the page displays the changes

    As an admin
    I want to be able to track my company's business metrics
    So I can track the company's progress

      Acceptance Criteria:
        * In the admin account profile page, there should be an option to check the business metrics
        * Should I follow the link, I am brought to a page that displays that information
        * I can edit or delete this information should I have to

## ER Diagrams

![screen shot 2018-10-19 at 8 30 29 pm](https://user-images.githubusercontent.com/41710509/47249143-f404f980-d3dd-11e8-9bb3-f43f1665ac93.png)
