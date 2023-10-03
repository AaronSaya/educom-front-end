import React from 'react'
import { render, screen } from "@testing-library/react"
import SectionMock from './Section.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSection } from './Section.stories'

const testID = "Section-" + Math.floor(Math.random()*90000) + 10000

describe("Section", () => {

    it("Can render Section", () => {
        render(<DefaultSection testID={ testID } { ...SectionMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})