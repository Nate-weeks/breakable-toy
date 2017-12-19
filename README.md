# README

## Admistus

Admistus is an organizational app for Administrators or Mental Health Workers to share client data between organizations.

---

## Contributors
* [Nate Weeks](https://github.com/Nate-weeks)

## Features

A user can create an account on Admistus and then view and create facilities and sub-divisions.  For each facility and sub-division you create, you have the ability to approve and remove users from the facility.  A user can't view any information other than the list and description of facilities until they are approved by the facility creator.  This is to control access to within each facility-division, where sensitive client information is stored.  Any user approved to view client information in a division can add clients, edit client data, and transfer clients from one division to another.

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
