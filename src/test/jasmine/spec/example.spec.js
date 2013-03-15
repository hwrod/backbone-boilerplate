// Generated by CoffeeScript 1.6.1
(function() {

  describe("one tautology", function() {
    it("is a tautology", function() {
      return expect(true).toBeTruthy();
    });
    return describe("is awesome", function() {
      return it("is awesome", function() {
        return expect(1).toBe(1);
      });
    });
  });

  describe("simple tests", function() {
    it("increments", function() {
      var mike;
      mike = 0;
      expect(mike++ === 0).toBeTruthy();
      return expect(mike === 1).toBeTruthy();
    });
    return it("increments (improved)", function() {
      var mike;
      mike = 0;
      expect(mike++).toBe(0);
      return expect(mike).toBe(1);
    });
  });

  describe("setUp/tearDown", function() {
    beforeEach(function() {});
    afterEach(function() {});
    it("example", function() {});
    return describe("setUp/tearDown", function() {
      beforeEach(function() {});
      afterEach(function() {});
      return it("example", function() {});
    });
  });

  describe("async", function() {
    return it("multiple async", function() {
      var semaphore;
      semaphore = 2;
      setTimeout(function() {
        expect(true).toBeTruthy();
        return semaphore--;
      }, 500);
      setTimeout(function() {
        expect(true).toBeTruthy();
        return semaphore--;
      }, 500);
      return waitsFor(function() {
        return semaphore === 0;
      });
    });
  });

}).call(this);