/**
 * Created by daniel.pacurici on 14.09.2015.
 */
'use strict';
var request = require("request");
var base_url = "http://localhost:3000/";

describe("Hello World Server", function () {
    describe("Get /", function () {
        it("return status code 200", function () {
            request.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns Hello World", function () {
            request.get(base_url, function (error, response, body) {
                expect(body).toBe(200);
                done();
            });
        });
    });

    describe("When we add 2 numbers for testing purpose", function(){
        it("should return the sum of the 2 numbers", function(){
            expect(2+2).toBe(4);
        });
    });
});