import { Cube_Volume } from '../Cube_Volume.js'

describe("A suite", function() {
    it("The volume of the cube is", function() {
      let Volume = Cube_Volume(1);
      expect(Volume).toBe(1);
    });
  });
  
  