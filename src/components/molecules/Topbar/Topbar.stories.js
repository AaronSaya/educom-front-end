import React from 'react'
import Topbar from './Topbar'
import TopbarMock from './Topbar.mock'

/// TODO: fix story entries
const TopbarMeta = {
    title: "molecules/Topbar",
    component: Topbar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Topbar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Topbar {...args} />

export const DefaultTopbar = Template.bind({})
DefaultTopbar.args = {
    testID: testID,
    ...TopbarMock
}

export default TopbarMeta