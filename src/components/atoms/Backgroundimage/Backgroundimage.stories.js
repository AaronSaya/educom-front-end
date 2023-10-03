import React from 'react'
import Backgroundimage from './Backgroundimage'
import BackgroundimageMock from './Backgroundimage.mock'

/// TODO: fix story entries
const BackgroundimageMeta = {
    title: "atoms/Backgroundimage",
    component: Backgroundimage,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Backgroundimage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Backgroundimage {...args} />

export const DefaultBackgroundimage = Template.bind({})
DefaultBackgroundimage.args = {
    testID: testID,
    ...BackgroundimageMock
}

export default BackgroundimageMeta