import React from 'react'
import { render, screen } from "@testing-library/react"
import ImageMock from './Images.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultImage } from './Image.stories'

const testID = "Image-" + Math.floor(Math.random()*90000) + 10000

describe("Image", () => {

    it("Can render Image", () => {
        render(<DefaultImage testID={ testID } { ...ImageMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})