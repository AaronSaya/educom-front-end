import React from 'react'
import { render, screen } from "@testing-library/react"
import BackgroundimageMock from './Backgroundimage.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultBackgroundimage } from './Backgroundimage.stories'

const testID = "Backgroundimage-" + Math.floor(Math.random()*90000) + 10000

describe("Backgroundimage", () => {

    it("Can render Backgroundimage", () => {
        render(<DefaultBackgroundimage testID={ testID } { ...BackgroundimageMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})