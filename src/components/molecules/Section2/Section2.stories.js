import React from 'react'
import Section2 from './Section2'
import Section2Mock from './Section2.mock'

/// TODO: fix story entries
const Section2Meta = {
    title: "molecules/Section2",
    component: Section2,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Section2-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Section2 {...args} />

export const DefaultSection2 = Template.bind({})
DefaultSection2.args = {
    testID: testID,
    ...Section2Mock
}

export default Section2Meta