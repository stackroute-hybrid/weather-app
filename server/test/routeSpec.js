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
          res.text.should.be.equal("Hellos from weather app");
          done();
        });
  });
});

describe("Testing the /weather route", function(err){
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
