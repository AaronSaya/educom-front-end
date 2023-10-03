import React from 'react'
import Input from './Input'
import InputMock from './Input.mock'

/// TODO: fix story entries
const InputMeta = {
    title: "atoms/Input",
    component: Input,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Input-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    testID: testID,
    ...InputMock
}

export default InputMeta