# Flatiron Jobs: V2

A job finding web app, built with React and Rails.

## About

Flatiron Jobs is a web app designed to help developers find their dream job. They can look at job listings and save them to their profile. 

The app uses React for the frontend and a Rails API for the backend.

# Usage

Currently, the only way to use the web app is to run a local development server.

Before you start, you need a few dependencies:
- Git
- Ruby
- Bundler
- Rails
- Node.js

After you've installed all of those, open a terminal and clone the repository:

```sh
git clone https://github.com/DrewDalmedo/flatiron-jobs-v2
```

Next, `cd` into the project's directory and run `bundle install`:

```sh
cd flatiron-jobs-v2 && bundle install
```

After that's done, run a database migration and seed the database with test data:
```sh
rails db:migrate && rails db:seed
```

Now that the backend is all good to go, `cd` into the `client` directory and install all of the required dependencies for the frontend:

```sh
cd client && npm install
```

After that, you're done! `cd` back to the root of the project's directory and run `rails start`

```sh
cd .. && rails start
```
