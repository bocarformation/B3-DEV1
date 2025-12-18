import { render, screen } from "@testing-library/react"
import { CreatePoll } from "../components/CreatePoll"

describe("CreatePoll", () => {
    const setup = () => {
        render(<CreatePoll />)
    }

    it("should display title", () => {
        setup();
        expect(screen.getByText("Poll Builder App")).toBeInTheDocument();
    });

    it("should display input for poll title", () => {
        setup();
        expect(screen.getByPlaceholderText("Entrez le titre du sondage")).toBeInTheDocument();
    })
})