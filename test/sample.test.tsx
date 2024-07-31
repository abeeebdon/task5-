//__test__/sampleTest.tsx
 
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import SampleTS from '@/components/sample';
 
describe('sample test', () => {
  test('render sample test', () => {
    render(<SampleTS/>);
  });
});