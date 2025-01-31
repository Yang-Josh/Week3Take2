import { M_to_Y } from '../M_to_Y.js'

describe("A suite", function() {
    it("convert metres", function() {
      let yards = M_to_Y(3);
      expect(yards).toBe(3.28083);
    });
  });
  
  