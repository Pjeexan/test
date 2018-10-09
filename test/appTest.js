const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it ('App should return Hello', function(){
        //console.log('Helloworld');
        assert.equal(app(), 'Hello');


    });


});