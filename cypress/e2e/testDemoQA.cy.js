// HOME PAGE
describe.skip("Menu", () => {
  const expectedMenuItemNames = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions",
    "Book Store Application",
  ];

  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("count tiles", () => {
    cy.get("div.card").should("have.length", expectedMenuItemNames.length);
  });

  it("verify menu item names - var#1", function () {
    cy.get(".card").each(($el, idx) => {
      cy.log($el.text());
      expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);
    });
  });

  it("verify menu item names - var#2", function () {
    cy.get(".card")
      .then(($els) => {
        // cy.log(Cypress.$.makeArray($els).map($el => $el.innerText));
        return Cypress.$.makeArray($els).map(($el) => $el.innerText);
      })
      .should('deep.equal', expectedMenuItemNames)
  });

  it("verify menu item names - var#3", function () {
    cy.get(".card")
      .then(($els) => {
        let actualArray = Cypress.$.makeArray($els).map(($el) => $el.innerText);
        expect(actualArray).to.be.deep.equal(expectedMenuItemNames);
      });
  });

  it("verify menu item names - var#4", function () {
    cy.get(".card")
      .then(($els) => {
        return Cypress._.map($els, "innerText");
      })
      .should("deep.equal", expectedMenuItemNames);
  });

});


// TILE ELEMETS
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


// TILE FORMS
describe("Tile Forms", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("clicking the tile Forms", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.url().should("include", "/forms");
    cy.get("div.main-header").should("have.text", "Forms");
  });

  it("clicking the dropdown Practice Form", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.get("#item-0 span").contains("Practice Form").click();
  });

  it("fill out the section Name", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.get("#item-0 span").contains("Practice Form").click();
    cy.get("#firstName").type("Daria");
    cy.get("#lastName").type("Filko");
    cy.get("#userEmail").type("testdf@df.mail");
    cy.get("[for='gender-radio-2']").click();
    cy.get("#userNumber").type("0123456789");
    cy.get("#dateOfBirth").click();

  });
  
});