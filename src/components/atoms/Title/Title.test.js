import React from 'react'
import { render, screen } from "@testing-library/react"
import TitleMock from './Title.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTitle } from './Title.stories'

const testID = "Title-" + Math.floor(Math.random()*90000) + 10000

describe("Title", () => {

    it("Can render Title", () => {
        render(<DefaultTitle testID={ testID } { ...TitleMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})