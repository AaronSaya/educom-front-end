import React from 'react'
import { render, screen } from "@testing-library/react"
import ButtongroupMock from './Buttongroup.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultButtongroup } from './Buttongroup.stories'

const testID = "Buttongroup-" + Math.floor(Math.random()*90000) + 10000

describe("Buttongroup", () => {

    it("Can render Buttongroup", () => {
        render(<DefaultButtongroup testID={ testID } { ...ButtongroupMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})