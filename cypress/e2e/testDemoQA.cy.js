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

  it("clicking Text Box item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
    cy.get("div.main-header").should("have.text", "Text Box");
  });

  it("clicking Check Box item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-1 span').contains('Check Box').click();
    cy.get("div.main-header").should("have.text", "Check Box");  
  });

  it("clicking Radio Button item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-2 span').contains('Radio Button').click();
    cy.get("div.main-header").should("have.text", "Radio Button");  
  });

  it("clicking Web Tables item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-3 span').contains('Web Tables').click();
    cy.get("div.main-header").should("have.text", "Web Tables");  
  });

  it("clicking Buttons item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-4 span').contains('Buttons').click();
    cy.get("div.main-header").should("have.text", "Buttons");  
  });

  it("clicking Links item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-5 span').contains('Links').click();
    cy.get("div.main-header").should("have.text", "Links");  
  });

  it("clicking Broken Links - Images item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-6 span').contains('Broken Links - Images').click();
    cy.get("div.main-header").should("have.text", "Broken Links - Images");  
  });

  it("clicking Upload and Download item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-7 span').contains('Upload and Download').click();
    cy.get("div.main-header").should("have.text", "Upload and Download");  
  });

  it("clicking Dynamic Properties item into dropdown list", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get('#item-8 span').contains('Dynamic Properties').click();
    cy.get("div.main-header").should("have.text", "Dynamic Properties");  
  });

});


describe("Elements | Text Box", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
  });

  it("fill out the field Full Name", () => {
    cy.get("#userName")
      .type("Daria")
      .should('have.value', 'Daria')
      .clear()
      .should('have.value', '');
  });

});


describe("Elements | Check Box", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-1 span").contains("Check Box").click();
  });

  it("check the checkbox Home", () => {
    cy.get("input#tree-node-home")
      .check({force: true})
      .should('be.checked');
    cy.get('#result span:nth-child(1)')
      .contains('selected')
      .should('exist');
    cy.get("input#tree-node-home")
      .uncheck({force: true})
      .should('not.be.checked');
    cy.get('#result')
      .should('not.exist');
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

  it("clicking Practice Form item into dropdown list", () => {
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

  it.only("fill out the form", () => {
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
    cy.get("[for='gender-radio-2']")
      .click();
    cy.get("#userNumber")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'Mobile Number')
      .type("1234567890")
      .and("have.value", "1234567890");
    cy.get("#dateOfBirthInput")
      .click();
    cy.get("select.react-datepicker__month-select")
      .select('January');
    cy.get("select.react-datepicker__year-select")
      .select('1988');
    cy.get('div.react-datepicker__day--015')
      .click();
    cy.get('#dateOfBirthInput')
      .should('have.attr', 'value', '15 Jan 1988');
    cy.get('#subjectsInput')
      .should("have.text", "")
      .type("Comp{enter}");
    cy.get('[class$=value__label]')
      .should("have.text", "Computer Science");
    cy.get("[for=hobbies-checkbox-1]")
      .click();
    cy.get("#currentAddress")
      .should("have.text", "")
      .and('have.attr', 'placeholder', 'Current Address')
      .type("Kyiv, Ukraine")
      .should("have.value", "Kyiv, Ukraine");
    cy.get('#state')
      .type("raj{enter}");
    cy.get('[class$=singleValue]')
      .should("have.text", "Rajasthan");
    cy.get('#city')
      .type("jais{enter}");
    cy.get('#city [class$=singleValue]')
      .should("have.text", "Jaiselmer");
    cy.get("#submit")
      .click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for');
    cy.get("#closeLargeModal")
      .click();
    cy.get('#firstName')
      .should('have.text', '')
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


describe('Widgets | Select Menu', () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
    cy.get('div.card-body').contains('Widgets').click();
    cy.get('#item-8 span').contains('Select Menu').click();
  });

  it("check value of dropdown item / select", () => {
    cy.get("select#oldSelectMenu")
      .select('Purple')
      .should('have.value', '4');
  });
  
  // it("check value of dropdown item / trigger", () => {
  //   cy.get("select#oldSelectMenu")
  //     .trigger('mousedown');
  //   cy.wait(1000);
  //   cy.get("select#oldSelectMenu")
  //     .trigger('mouseup');
  // });





});
