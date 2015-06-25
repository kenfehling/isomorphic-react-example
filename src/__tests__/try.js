jest.dontMock('../sum');

describe('try', function () {
    it('should pass', function () {
        expect(1 + 2).toEqual(9);
    });
});