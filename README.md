# BLOCK.one Web Application Developer Interview code Test

<img src="https://block.one/wp-content/uploads/2018/04/logo-1.png" style="width: 280px; height: 110px"/>

## Vue Web Application to pull the most recent blocks

**User Story** : As an EOS User, I want to see a list of the most recent blocks from the eosio blockchain

# Resources:
  - eos-js: https://github.com/EOSIO/eosjs
  - Main Chain Endpoint; EOS Newyork has the transaction API enabled and will return full
    block content: https://api.eosnewyork.io/v1/chain/get_info
  - Description of api endpoints: https://developers.eos.io/eosio-nodeos/reference 
  - Create Vue App with vue-cli: https://cli.vuejs.org/guide/creating-a-project.html
  - Vuetify; Material Design Component Framework: https://vuetifyjs.com/en/getting-started/quick-start

# Product Owner Acceptance Criteria:
  - Page should update with the click of a “LOAD” button. We should only show 10 most
recent blocks, older blocks should dropped from the list when you hit load again.
  - Block list entries should show the hash of the block (this is the id), it’s timestamp, and
the count of actions included in that block (this will typically be 0)
  - Clicking a block entry should expand that line to show the raw contents of the block
output.

# Technical Implementation Expectations:
  - Use eos-js for requesting data from the blockchain.
  - Unit tests
  
# To run the application
- Open terminal window and run <code>npm run serve</code>

# Build Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# run unit tests
npm test
```

## App is running on localhost:8080
