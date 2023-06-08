// HOME PAGE
describe("Menu", () => {
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

  it('verify all cards styles', () => {
    cy.get('div.card')
      // .should('have.css', 'background', 'rgb(238, 238, 238)')
      .and('have.css', 'height', '400px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0.125)')
      .and('have.css', 'border-radius', '4px')
  });

  it('verify all cards icons', () => {
    cy.get('div.avatar')
      .should('have.css', 'color', 'rgb(1, 160, 224)')
      .and('have.css', 'width', '100px')
      .and('have.css', 'height', '100px')
      .and('have.css', 'border', '1px solid rgb(187, 187, 187)')
      .and('have.css', 'border-radius', '50%');
  });

});


// TILE ELEMETS
describe("Tile Elements", () => {
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

  it("fill out the form", () => {
    cy.get(".card:nth-child(2)").click();
    cy.get(".element-group:nth-child(2)>div").click();
    cy.get('#firstName')
      .should('have.text', '')
      .and('have.attr', 'placeholder', 'First Name')
      .type('Daria')
      .and('have.value', 'Daria');
    cy.get("#lastName")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'Last Name')
      .type("Filko")
      .and("have.value", "Filko");
    cy.get("#userEmail")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'name@example.com')
      .type("testdf@df.mail")
      .and("have.value", "testdf@df.mail");
    cy.get("[for='gender-radio-2']").click();
    cy.get("#userNumber")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'Mobile Number')
      .type("1234567890")
      .and("have.value", "1234567890");
    // cy.get("#dateOfBirth")
    //   .type("15 Jan 1988");
    // cy.get("#subjectsInput")
    //   .type("Computer Science")
    //   .should("have.value", "Computer Science");
    cy.get("[for=hobbies-checkbox-1]").click();
    cy.get("#currentAddress")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'Current Address')
      .type("Kyiv, Ukraine")
      .and("have.value", "Kyiv, Ukraine");
    cy.get("#submit").click();
    cy.get("#closeLargeModal").click();
  });

  it("verify fields color after validation", () => {
    cy.get(".card:nth-child(2)").click();
    cy.get(".element-group:nth-child(2)>div").click();
    cy.get("#firstName")
      .should("have.text", "")
      .type("Daria{enter}")
      .and("have.value", "Daria")
      .and('have.css', 'border-color', "rgb(40, 167, 69)");
    cy.get('#lastName')
      .should('have.css', 'border-color', "rgb(220, 53, 69)");
  });
  
});