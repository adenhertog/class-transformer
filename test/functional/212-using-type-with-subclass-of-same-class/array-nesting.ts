import { Type } from '../../../src'
import { BaseClass } from './base-class'
import { NoNesting } from './no-nesting'
import { SingleNesting } from './single-nesting'

export class ArrayNesting extends BaseClass {
  type = 'array-nesting'
  
  @Type(() => ArrayNestingItem)
  subs: ArrayNestingItem[]

  constructor (
    subs: ArrayNestingItem[]
  ) {
    super()
    this.subs = subs
  }
}

export class ArrayNestingItem {
  @Type(() => BaseClass, {
    discriminator: {
      property: 'type',
      subTypes: [
        { name: 'no-nesting', value: NoNesting },
        { name: 'single-nesting', value: SingleNesting },
        { name: 'array-nesting', value: ArrayNesting }
      ]
    },
    keepDiscriminatorProperty: true
  })
  sub: BaseClass | undefined

  constructor (
    sub: BaseClass | undefined
  ) {
    this.sub = sub
  }
}