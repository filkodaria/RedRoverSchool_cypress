describe('Menu', () => {
	beforeEach(() => {
		cy.visit("https://demoqa.com");
	});

	it('count tiles', () => {
		cy.get("div.card").should('have.length', 6);
	});
})


describe("Tile Elements", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it.skip("clicking the tile Elements", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.url().should("include", "/elements");
    cy.get("div.main-header").should("have.text", "Elements");
  });

  it.skip("clicking the dropdown Text Box", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
  });

  it.skip("fill out the field Full Name", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
    cy.get("#userName").type("Daria");
  });
});