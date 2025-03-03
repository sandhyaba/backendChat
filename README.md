# HWS API

## Description

The HWS api is written in nodejs (express) along with postgres database. main purpose of the api project is to serve data from database.

## Instillation

1. Clone the repository https://gitlab.com/vzinjuvadia/api.git.
1. [Install node](https://nodejs.org/en/download/)
1. [Install aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

## Usage

#### Running Locally

The application can be run using **nodejs** environment.

1.  **Node.js**

    1. Go to your project directory and run command `npm install`.
    1. Run command `aws initialize`. terminal will ask for secret key and access key.
        ``` 
        access key: xxxxxxxxxxxxxxxxxxxxx
        secret key: xxxxxxxxxxxxxxxxxxxxx
        ```
    1. To Run application you need to fire `npm start`  command and application start on 3000 (`localhost:3000`) port. 

    ```
    IMPORTANT NOTES:

      1. You will get above keys from maintainer.
    ```

## Development

#### Development Steps

1. To begin making code changes, create a branch (**[yourname-gitlabIssueNumber]** ex: **ankit-1331** ) based off of `development`.
1. Create a merge request (mr) in github (set the base to be `development`) and ensure all issues with the continuous integration (CI) pipeline are addressed (the green checks and red X's at the bottom of the PR).
1. Once your PR passes all CI checks and has been reviewed and **approved** by enough of the appropriate people, it can be merged.

```
IMPORTANT NOTES:

  1. Don't create merge request directly to master branch.
```

#### StyleGuide

You can find details in this document [STYLEGUIDE.md](/STYLEGUIDE.md#javascript-style-guide)

#### How to write api

You can find details in this document [API.md](/API.md#api)

## Deployment

We have two servers (**development** and **production**) hosted in google cloud. `development` is our "close to prod" testing/integration environment and `Production` is the real environment where actual users of the app will play.

#### Deployment Steps

1. Create a new merge request for development based off of master (select `base` branch as `master` and `compare` branch as `development`).
1. Once your merge request passes the CI checks and is approved by the correct people.
1. Apply sql changes to production db manually from the [gitlab issue]().
1. Once the PR gets merged to master the gitlab pipeline is triggered, it will generate build and deploy to the production server.
1. You can check application at {{domain_name_or_ip_address}} once it is deployed (ex. https://v2-prod.healthwealthsafe.net/auth/login).


```
IMPORTANT NOTES:

  1. Don't merge any branch directly to the master. Always create a pull request.
```

### Initiating the database

Fhirbase (https://www.health-samurai.io/fhirbase) is used to initiate the schema for all the databases.
The version of fhir used is 3.3.0

Use the following command to init the schema. 

`./fhirbase --host xxxxx.rds.amazonaws.com -p 5432 -d hws_uat -U hws_admin -W xxxxxxxx --fhir=3.3.0 init`


### Database Updates

Database updates can be handled via `db-migrate` command

Create a new migration with the following command
`./node_modules/db-migrate/bin/db-migrate create <migration_name> --config ./src/conf/db-migrate-config.json -e uat`

Move migrations upwards with the following command
`./node_modules/db-migrate/bin/db-migrate up  --config ./src/conf/db-migrate-config.json -e uat`

Run only specified migration script use the following command
`./node_modules/db-migrate/bin/db-migrate up 20210710055559-exam-room.js  --config ./src/conf/db-migrate-config.json -e uat`

More details available in: https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/