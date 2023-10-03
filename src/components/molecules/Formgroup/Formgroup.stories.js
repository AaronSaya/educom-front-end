import React from 'react'
import Formgroup from './Formgroup'
import FormgroupMock from './Formgroup.mock'

/// TODO: fix story entries
const FormgroupMeta = {
    title: "molecules/Formgroup",
    component: Formgroup,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Formgroup-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Formgroup {...args} />

export const DefaultFormgroup = Template.bind({})
DefaultFormgroup.args = {
    testID: testID,
    ...FormgroupMock
}

export default FormgroupMeta