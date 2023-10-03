import React from 'react'
import { render, screen } from "@testing-library/react"
import ChapterMock from './Chapter.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultChapter } from './Chapter.stories'

const testID = "Chapter-" + Math.floor(Math.random()*90000) + 10000

describe("Chapter", () => {

    it("Can render Chapter", () => {
        render(<DefaultChapter testID={ testID } { ...ChapterMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})