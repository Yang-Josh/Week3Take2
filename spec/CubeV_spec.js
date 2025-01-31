import { Cube_Volume } from '../Cube_Volume.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let Volume = Cube_Volume(1);
      expect(Volume).toBe(1);
    });
  });
  
  