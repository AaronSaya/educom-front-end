import React from 'react'
import Chapter from './Chapter'
import ChapterMock from './Chapter.mock'

/// TODO: fix story entries
const ChapterMeta = {
    title: "organisms/Chapter",
    component: Chapter,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Chapter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Chapter {...args} />

export const DefaultChapter = Template.bind({})
DefaultChapter.args = {
    testID: testID,
    ...ChapterMock
}

export default ChapterMeta