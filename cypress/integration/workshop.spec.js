import Person from '../../src/person';


describe('Example', () => {
  it('should know that true is true', () => {
    expect(true).to.equal(true);
  });
});


describe('Person', () => {
  it('should have a name', () => {
    const tanner = new Person('Tanner');
    expect(tanner.name).to.equal('Tanner');
  });
});
