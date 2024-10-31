describe('check some text spec', () => {
  before(() => {
    cy.visit('https://example.optimizely.com')
  })
  it('verify header, pass', () => {
    cy.get('#title').should('have.text','Instructions')
  })
  it('verify some text 1, pass', () => {
    cy.get('#paragraph1').should('be.visible')
  })
  it('verify some text 2, fail', () => {

    cy.get('#paragraph2').should('have.text','Instructions')
  })
  it('verify some text 3, fail', () => {
    cy.get('#paragraph3').should('have.text','Instructions')
  })
})