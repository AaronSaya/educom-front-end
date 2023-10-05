import React from 'react'
import { render, screen } from "@testing-library/react"
import Section2Mock from './Section2.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSection2 } from './Section2.stories'

const testID = "Section2-" + Math.floor(Math.random()*90000) + 10000

describe("Section2", () => {

    it("Can render Section2", () => {
        render(<DefaultSection2 testID={ testID } { ...Section2Mock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})