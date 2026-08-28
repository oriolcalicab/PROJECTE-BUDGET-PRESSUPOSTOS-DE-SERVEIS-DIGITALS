import { describe, it, expect } from "vitest";
import { calculateQuote } from "./calculateQuote";

describe('calculateQuote', () => { 
    it("calculates the total for a single service without configuration", () =>{
        const result = calculateQuote({ selectedServices: ["seo"]});

        expect(result.total).toBe(300);
        expect(result.lines).toHaveLength(1);
        expect(result.lines[0].name).toBe("SEO");
        
 });
 it("calculates the total for multiple services", () => {
    const result = calculateQuote({ selectedServices: ["seo", "advertising"] });

    expect(result.total).toBe(700); // 300 + 400
    expect(result.lines).toHaveLength(2);
 });
 
 it("calculates the total for the web service with page/language configuration", () => {
    const result = calculateQuote({ selectedServices: ["web"], webConfig: { pages: 3, languages: 2 } }); 
    
    expect(result.total).toBe(650);
  })  

  it("returns a total of 0 when no services are selected", () => {
    const result = calculateQuote({ selectedServices: [] });

    expect(result.total).toBe(0);
    expect(result.lines).toHaveLength(0);
  });

})