![Logo](./logo.png)

# Stafsetning.is Frontend
TODO Build status
TODO codocov (or not)
TODO [![dependencies Status](https://david-dm.org/Stafsetning-is/stafsetning-frontend/status.svg)](https://david-dm.org/Stafsetning-is/stafsetning-frontend)

The full-fledged frontend for stafsetning.is

## Setup

To setup on a local machine follow these steps.

**1.** Open your favorite terminal and clone the repository to a directory with SSH or with HTTPS. Navigate to the newly created repository

`$ git clone git@github.com:Stafsetning-is/stafsetning-frontend.git`

`$ git clone https://github.com/Stafsetning-is/stafsetning-frontend.git`

`$ cd stafsetning-frontend`

**2.** Install all the necessary dependencies with npm. If you don't have npm, head to the [NodeJS website](https://nodejs.org/en/download/) and follow the steps to install Node which comes with npm. Write in your terminal:

`$ npm install`

**3.** Provide all the required environment variables. First create a .env file.

`$ touch .env` or by using our favorite text editor 😉 `vim .env`

The environment variables required are

MONGODB_URI<br>
MONGODB_URI_LOCAL<br>
SESSION_SECRET<br>
PORT<br>
USER_PW_HASH_KEY<br>
S3_ACCESS_KEY<br>
S3_SECRET_KEY<br>
AVATAR_BUCKET_NAME

Copy and paste these to your .env file with valid values.

**4.** Start up the website with npm

`$ npm run dev`

The default web browser should open displaying the site at localhost:3000. 

**5.** Alternatively you can visit the site with the link at the top of the repository page.

## Contributing

TODO

#### Bug Reports & Feature Requests

TODO

Please use the issue tracker (add link here) to report any bugs or file feature requests.

#### Developing

TODO
