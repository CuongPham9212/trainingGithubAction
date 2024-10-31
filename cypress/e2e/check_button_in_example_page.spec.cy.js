describe('check some button spec', () => {
  before(() => {
    cy.visit('https://example.optimizely.com')
  })
  it('verify submit button, pass', () => {
    cy.get('#submitbutton').should('have.value','SUBMIT')
  })
  it('verify button 2, pass', () => {
    cy.get('#submit5button').should('have.attr','optimizelyvalue','500')
  })
})