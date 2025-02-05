import { Suggest_clothing } from '../Suggest_clothing.js'

describe("A suite", function() {
    it("for a humid day", function() {
      let Clothing = Suggest_clothing (28, 80);
      expect(Clothing).toBe("t-shirt, shorts");
    });

    it("for a frigid day", function() {
      let Clothing = Suggest_clothing(-3, 100);
      expect(Clothing).toBe("coat, scarf");
      
    });
  });
  
  