import React from 'react'
import { render, screen } from "@testing-library/react"
import TextMock from './Text.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultText } from './Text.stories'

const testID = "Text-" + Math.floor(Math.random()*90000) + 10000

describe("Text", () => {

    it("Can render Text", () => {
        render(<DefaultText testID={ testID } { ...TextMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})