
describe('Tanner\'s website', () => {
  it('should take you to GitHub', () => {
    // load the page
    cy.visit('https://tannerhodges.com');
    
    // find the link
    // cy.get(':nth-child(3) > .no-border > .o-icon'); // this came from the cypress selector playground
    // cy.contains('GitHub'); // .contains() is scary
    // cy.get('a').contains('GitHub'); // can chain things but contains goes down an extra level when chained
    // cy.get('a').contains('GitHub').closest('a').click(); // error b/c of cross origin - also GH blocks loading in an iframe

    cy.get('a').contains('CodePen').closest('a').click(); // loads, but same cross origin error
    // to make this pass, you have to disable chrome's web security (make sure to turn it back on if you do...)

    cy.url().should('equal', 'https://codepen.io/tannerhodges/');
  })
});
