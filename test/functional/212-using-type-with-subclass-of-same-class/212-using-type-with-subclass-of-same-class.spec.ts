import 'reflect-metadata'
import { instanceToPlain, plainToInstance } from '../../../src'
import { ArrayNesting, ArrayNestingItem } from './array-nesting'
import { NoNesting } from './no-nesting'
import { SingleNesting } from './single-nesting'

describe('using @Type with subclasses of the same class', () => {
  it('should work with no nesting', () => {
    const noNesting = new NoNesting()
    const plain = instanceToPlain(noNesting)
    const instance = plainToInstance(NoNesting, plain)
    expect(instance).toMatchObject(noNesting)
    expect(instance).toBeInstanceOf(NoNesting)
  })

  it('should work with single nesting', () => {
    const singleNesting = new SingleNesting(new NoNesting())
    const plain = instanceToPlain(singleNesting)
    const instance = plainToInstance(SingleNesting, plain)
    expect(instance).toMatchObject(singleNesting)
    expect(instance).toBeInstanceOf(SingleNesting)
    expect(instance.sub).toBeInstanceOf(NoNesting)
  })

  it('should work with array nesting', () => {
    const arrayNesting = new ArrayNesting([
      new ArrayNestingItem(new SingleNesting(new NoNesting()))
    ])
    const plain = instanceToPlain(arrayNesting)
    const instance = plainToInstance(ArrayNesting, plain)
    expect(instance).toMatchObject(arrayNesting)
    expect(instance).toBeInstanceOf(ArrayNesting)
    expect(instance.subs![0]).toBeInstanceOf(ArrayNestingItem)
  })
})