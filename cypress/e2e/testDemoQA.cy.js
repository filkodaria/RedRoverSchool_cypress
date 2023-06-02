describe('Menu', () => {
  const expectedMenuItemNames = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions",
    "Book Store Application"
  ];
  
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it('count tiles', () => {
    cy.get("div.card").should('have.length', expectedMenuItemNames.length);
  });
  
  it("verify menu item names", function () {
    cy.get(".card").each(($el, idx) => {
      cy.log($el.text());
      expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);
    });
  });
});


describe.skip("Tile Elements", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("clicking the tile Elements", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.url().should("include", "/elements");
    cy.get("div.main-header").should("have.text", "Elements");
  });

  it("clicking the dropdown Text Box", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
  });

  it("fill out the field Full Name", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
    cy.get("#userName").type("Daria");
  });
});