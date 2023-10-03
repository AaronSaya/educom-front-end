import React from 'react'
import Image from './Images'
import ImageMock from './Images.mock'

/// TODO: fix story entries
const ImageMeta = {
    title: "atoms/Images",
    component: Image,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Image-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Image {...args} />

export const DefaultImage = Template.bind({})
DefaultImage.args = {
    testID: testID,
    ...ImageMock
}

export default ImageMeta