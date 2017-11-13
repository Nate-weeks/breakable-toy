# README

#Admistus

Admistus is an organizational app for Administrators or Mental Health Workers to share client data between organizations.

---

## Contributors
* [Nate Weeks](https://github.com/Nate-weeks)

## Features

* Users can create and update their personal accounts
* Users can create a facility
* As the creator of a facility Users can approve other Users to join the facility
* As part of a facility Users can create Divisions
* As the creator of a division Users can approve other Users to join the division
* As part of a division Users can add clients
* Users can update client information
* Users can transfer client information between Divisions and Facilities

## Technologies

* Backend: Rails 5.1.2
* Frontend: React.js and Embedded Ruby
* User Auth: Devise
* Image Hosting: Amazon Web Services
* Styling: Foundation
* Database: Postgres
* Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run this app on your local machine

* Install Ruby.2.3.3
* In a terminal, run ` git clone https://github.com/Nate-weeks/breakable-toy.git`
* run `rails s`
* in a separate windown run `./bin/webpacker-dev-server`
* Visit `http://localhost:3000/` in your browser.
