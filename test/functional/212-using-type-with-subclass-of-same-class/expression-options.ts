import { TypeOptions } from '../../../src'
import { ArrayNesting } from './array-nesting'
import { NoNesting } from './no-nesting'
import { SingleNesting } from './single-nesting'

export const expressionOptions: (() => TypeOptions) = () => ({
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