import Button from "../components/Button";
import { screen,render, fireEvent } from "@testing-library/react";
import App from "../App";
import Counter from "../components/counter";
describe("test button",()=>{
    it("test button",()=>{
        render(
        <Button size="large" color={"red"}>Clickme</Button>)
        const button=screen.getByText("Clickme")
expect(button).toBeInTheDocument()
    }  )
 
})
describe("getbyid",()=>{



it("getbytestid",()=>{
    render(<App/>)
    const button=screen.getAllByTestId("custom-button")
    // let text=button[0].textContent()
    // expect(text).toEqual("Clickme")
    expect(button[0]).toHaveTextContent("Clickme")
    expect(button[1]).toHaveTextContent("ADD")
    expect(button[2]).toHaveTextContent("REDUCE")
    screen.debug()
})
it("shouldinvoke",()=>{
    const mockFunc=jest.fn()
    render(<Button handleadd={mockFunc}/>)
    const button=screen.getByTestId("custom-button")
fireEvent.click(button)
fireEvent.click(button)
expect(mockFunc).toBeCalledTimes(2)

})
})
describe("counterapp",()=>{
    it("counterapp",()=>{
        render(<Counter/>)
        const name=screen.getByTestId("counter")
        const button =screen.getAllByTestId("custom-button")
        expect(name).toBeInTheDocument()
        expect(button[0]).toHaveTextContent("ADD")
    expect(button[1]).toHaveTextContent("REDUCE")
  
    })
    it("initialvalue",()=>{
        render(<Counter/>)
        let initialvalue=screen.getByTestId("counter")
        expect(initialvalue).toHaveTextContent("Counter:0")
        const add=screen.getAllByTestId("custom-button")
        fireEvent.click(add[0])
        expect(initialvalue).toHaveTextContent("Counter:5")
        fireEvent.click(add[1])
        expect(initialvalue).toHaveTextContent("Counter:0")
    })
    
})