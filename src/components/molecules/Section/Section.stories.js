import React from 'react'
import Section from './Section'
import SectionMock from './Section.mock'

const SectionMeta = {
    title: "molecules/Section",
    component: Section,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
        
    }
}

const testID = "Section-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Section {...args} />

export const DefaultSection = Template.bind({})
DefaultSection.args = {
    testID: testID,
    ...SectionMock
}

export default SectionMeta