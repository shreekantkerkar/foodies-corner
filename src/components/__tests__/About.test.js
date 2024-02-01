import {render,screen} from "@testing-library/react"
import About from "../About"


test("Should load the about us page we have made",()=> {
    render(<About/>)
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})