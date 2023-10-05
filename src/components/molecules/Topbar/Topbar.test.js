import React from 'react'
import { render, screen } from "@testing-library/react"
import TopbarMock from './Topbar.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTopbar } from './Topbar.stories'

const testID = "Topbar-" + Math.floor(Math.random()*90000) + 10000

describe("Topbar", () => {

    it("Can render Topbar", () => {
        render(<DefaultTopbar testID={ testID } { ...TopbarMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})