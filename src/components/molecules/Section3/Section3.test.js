import React from 'react'
import { render, screen } from "@testing-library/react"
import Section3Mock from './Section3.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSection3 } from './Section3.stories'

const testID = "Section3-" + Math.floor(Math.random()*90000) + 10000

describe("Section3", () => {

    it("Can render Section3", () => {
        render(<DefaultSection3 testID={ testID } { ...Section3Mock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})