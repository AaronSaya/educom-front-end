import React from 'react'
import { render, screen } from "@testing-library/react"
import Buttongroup2Mock from './Buttongroup2.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultButtongroup2 } from './Buttongroup2.stories'

const testID = "Buttongroup2-" + Math.floor(Math.random()*90000) + 10000

describe("Buttongroup2", () => {

    it("Can render Buttongroup2", () => {
        render(<DefaultButtongroup2 testID={ testID } { ...Buttongroup2Mock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})