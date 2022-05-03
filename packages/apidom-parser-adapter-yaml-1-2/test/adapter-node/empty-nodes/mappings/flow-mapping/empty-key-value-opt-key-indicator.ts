import { assert } from 'chai';
import { includesClasses, SourceMapElement } from '@swagger-api/apidom-core';

import * as adapter from '../../../../../src/adapter-node';

const setupMemberElement = async (): Promise<any> => {
  const yamlSource = '{ key: value, ? }';
  const { result } = await adapter.parse(yamlSource, { sourceMap: true });
  // @ts-ignore
  return result.content[1];
};
const setupEmptyKeyElement = async () => (await setupMemberElement()).key;
const setupEmptyValueElement = async () => (await setupMemberElement()).value;

describe('given flow mapping pair specified as optional “?” mapping key indicator', function () {
  it('should create empty key element', async function () {
    const emptyElement = await setupEmptyKeyElement();

    assert.isTrue(includesClasses(['yaml-e-node', 'yaml-e-scalar'], emptyElement));
  });

  it('should generate source maps for empty key', async function () {
    const emptyElement = await setupEmptyKeyElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');

    assert.instanceOf(sourceMapElement, SourceMapElement);
  });

  it('should generate proper source map start position for empty key', async function () {
    const emptyElement = await setupEmptyKeyElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');
    const [row, column, char] = [
      sourceMapElement.positionStart.get(0).toValue(),
      sourceMapElement.positionStart.get(1).toValue(),
      sourceMapElement.positionStart.get(2).toValue(),
    ];

    assert.strictEqual(row, 0);
    assert.strictEqual(column, 14);
    assert.strictEqual(char, 14);
  });

  it('should generate proper source map end position for empty key', async function () {
    const emptyElement = await setupEmptyKeyElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');
    const [row, column, char] = [
      sourceMapElement.positionEnd.get(0).toValue(),
      sourceMapElement.positionEnd.get(1).toValue(),
      sourceMapElement.positionEnd.get(2).toValue(),
    ];

    assert.strictEqual(row, 0);
    assert.strictEqual(column, 14);
    assert.strictEqual(char, 14);
  });

  it('should create empty value element', async function () {
    const emptyElement = await setupEmptyValueElement();

    assert.isTrue(includesClasses(['yaml-e-node', 'yaml-e-scalar'], emptyElement));
  });

  it('should generate source maps for empty value', async function () {
    const emptyElement = await setupEmptyValueElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');

    assert.instanceOf(sourceMapElement, SourceMapElement);
  });

  it('should generate proper source map start position for empty value', async function () {
    const emptyElement = await setupEmptyValueElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');
    const [row, column, char] = [
      sourceMapElement.positionStart.get(0).toValue(),
      sourceMapElement.positionStart.get(1).toValue(),
      sourceMapElement.positionStart.get(2).toValue(),
    ];

    assert.strictEqual(row, 0);
    assert.strictEqual(column, 15);
    assert.strictEqual(char, 15);
  });

  it('should generate proper source map end position for empty value', async function () {
    const emptyElement = await setupEmptyValueElement();
    const sourceMapElement = emptyElement.meta.get('sourceMap');
    const [row, column, char] = [
      sourceMapElement.positionEnd.get(0).toValue(),
      sourceMapElement.positionEnd.get(1).toValue(),
      sourceMapElement.positionEnd.get(2).toValue(),
    ];

    assert.strictEqual(row, 0);
    assert.strictEqual(column, 15);
    assert.strictEqual(char, 15);
  });
});