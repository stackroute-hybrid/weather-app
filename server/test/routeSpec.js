var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");

describe("Testing the /index route", function(err){
  it("should handle the request", function(done){
    supertest(app)
        .get("/index")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          res.text.should.be.equal("Hello from weather app");
          done();
        });
  });
});

describe("Testing the /weather route", function(err){
 /*it("should handle the JSON data", function(done){
    supertest(app)
        .get("/weather/getStoredWeather")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          done();
        });

  });

  it("should save the JSON data", function(done){
    supertest(app)
        .post("/weather/save")
        .expect(200)
        .send({
          "city":"New York",
          "country":"US",
          "icon":"01n",
          "description":"clear sky",
          "humidity":"40",
          "temp":"23.5",
          "max":"25",
          "min":"22",
          "date":"2016-10-11 09:00:00",
          "speed":"3.66",
          "all":"0",
          "hpa":"1039.17",
          "lat":"-74.005966",
          "lon":"40.714272",
            })
        .end(function(err,res,body){
          should.not.exist(err);
          res.text.should.be.equal("Weather Saved Sucessfully");
          done();
        });

  });*/


  it("should delete the JSON data", function(done){
    supertest(app)
        .delete("/weather/delete/142")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Weather successfully deleted');
          done();
        });
  });
});
