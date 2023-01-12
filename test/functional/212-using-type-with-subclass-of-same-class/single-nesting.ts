import { Type } from '../../../src'
import { ArrayNesting } from './array-nesting'
import { BaseClass } from './base-class'
import { NoNesting } from './no-nesting'

export class SingleNesting extends BaseClass {
  type = 'single-nesting'

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

  constructor (sub: BaseClass | undefined) {
    super()
    this.sub = sub
  }
}