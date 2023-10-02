import React from 'react'
import Title from './Title'
import TitleMock from './Title.mock'

/// TODO: fix story entries
const TitleMeta = {
    title: "atoms/Title",
    component: Title,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Title-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Title {...args} />

export const DefaultTitle = Template.bind({})
DefaultTitle.args = {
    testID: testID,
    ...TitleMock
}

export default TitleMeta