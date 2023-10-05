import React from 'react'
import Section3 from './Section3'
import Section3Mock from './Section3.mock'

/// TODO: fix story entries
const Section3Meta = {
    title: "molecules/Section3",
    component: Section3,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Section3-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Section3 {...args} />

export const DefaultSection3 = Template.bind({})
DefaultSection3.args = {
    testID: testID,
    ...Section3Mock
}

export default Section3Meta