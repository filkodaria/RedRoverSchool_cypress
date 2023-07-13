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
      .should('have.css', 'background-color', 'rgb(238, 238, 238)')
      .and('have.css', 'box-shadow', 'rgb(170, 170, 170) 5px 10px 10px 1px')
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


// ELEMENTS TILE
describe("Elements page", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("check the url of Elements page", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.url().should("include", "/elements");
  });

  it("check the header of Elements page", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("div.main-header").should("have.text", "Elements");
  });

});


describe("Elements | Text Box", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get("div.card-body h5").contains("Elements").click();
  });

  it("clicking the dropdown Text Box", () => {
    cy.get("#item-0 span").contains("Text Box").click();
    cy.get("div.main-header").should("have.text", "Text Box");
  });

  it("fill out the field Full Name", () => {
    cy.get("#item-0 span").contains("Text Box").click();
    cy.get("#userName")
      .type("Daria")
      .should('have.value', 'Daria')
      .clear()
      .should('have.value', '');
  });

});


// FORMS TILE
describe("Forms page", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("check the url of Forms page", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.url().should("include", "/forms");
  });

  it("check the header of Forms page", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.get("div.main-header").should("have.text", "Forms");
  });

  it("clicking the dropdown Practice Form", () => {
    cy.get("div.card-body h5").contains("Forms").click();
    cy.get("#item-0 span").contains("Practice Form").click();
    cy.get("div.main-header").should("have.text", "Practice Form");
  });

});


describe("Forms | Practice Form", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get(".card:nth-child(2)").click();
    cy.get(".element-group:nth-child(2)>div").click();
  });

  it("fill out the form", () => {
    cy.get('div h5')
      .should('have.text', 'Student Registration Form');
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
    cy.get("#firstName")
      .should("have.text", "")
      .type("Daria{enter}")
      .and("have.value", "Daria")
      .and('have.css', 'border-color', "rgb(40, 167, 69)");
    cy.get('#lastName')
      .should('have.css', 'border-color', "rgb(220, 53, 69)");
  });
  
});


// WIDGETS TILE
describe("Widgets page", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("check the url of Widgets page", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.url().should("include", "/widgets");
  });

  it("check the header of Widgets page", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get("div.main-header").should("have.text", "Widgets");
  });

  it("clicking Accordian item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-0 span').contains('Accordian').click();
    cy.get("div.main-header").should("have.text", "Accordian");  
  });

  it("clicking Auto Complete item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-1 span').contains('Auto Complete').click();
    cy.get("div.main-header").should("have.text", "Auto Complete");  
  });

  it("clicking Date Picker item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-2 span').contains('Date Picker').click();
    cy.get("div.main-header").should("have.text", "Date Picker");  
  });

  it("clicking Slider item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-3 span').contains('Slider').click();
    cy.get("div.main-header").should("have.text", "Slider");  
  });

  it("clicking Progress Bar item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-4 span').contains('Progress Bar').click();
    cy.get("div.main-header").should("have.text", "Progress Bar");  
  });

  it("clicking Tabs item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-5 span').contains('Tabs').click();
    cy.get("div.main-header").should("have.text", "Tabs");  
  });

  it("clicking Tool Tips item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-6 span').contains('Tool Tips').click();
    cy.get("div.main-header").should("have.text", "Tool Tips");  
  });

  it("clicking Menu item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-7 span').contains('Menu').click();
    cy.get("div.main-header").should("have.text", "Menu");  
  });

  it("clicking Select Menu item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Widgets").click();
    cy.get('#item-8 span').contains('Select Menu').click();
    cy.get("div.main-header").should("have.text", "Select Menu");  
  });

});


describe('Widgets | Tabs', () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get('div.card-body').contains('Widgets').click();
    cy.get('#item-5 span').contains('Tabs').click();
  });

  it('verify disabled tab', () => {
    cy.get('nav #demo-tab-more')
      .should('have.class', 'disabled')
      .and('have.css', 'color', 'rgb(108, 117, 125)');
  });

});