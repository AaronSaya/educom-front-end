import React from 'react'
import Text from './Text'
import TextMock from './Text.mock'

/// TODO: fix story entries
const TextMeta = {
    title: "atoms/Text",
    component: Text,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Text-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Text {...args} />

export const DefaultText = Template.bind({})
DefaultText.args = {
    testID: testID,
    ...TextMock
}

export default TextMeta