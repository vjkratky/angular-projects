import { Class } from './class';

describe('Class', () => {
  it('should create an instance', () => {
    const directive = new Class();
    expect(directive).toBeTruthy();
  });
});
