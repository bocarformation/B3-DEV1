import { render, screen } from "@testing-library/react"
import { CreatePoll } from "../components/CreatePoll"
import userEvent from "@testing-library/user-event"

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

    it("should display add button", () => {
        setup();
        expect(screen.getByRole("button", { name: "Ajouter une question" })).toBeInTheDocument()
    })

    it("should display disabled submit button", () => {
        setup();
        expect(screen.getByRole("button", { name: "Créer" })).toBeDisabled();
    })

    it("sould add a new question when click on add question button", async () => {
        setup();
        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton);
        await userEvent.click(addButton);

        const questionInputs = screen.getAllByPlaceholderText("Saisir la question");
        expect(questionInputs).toHaveLength(2);
    })

    it("should call addAnswerToQuestion when click on add answer button", async () => {
        setup();

        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton);

        const addAnswerButton = screen.getByRole("button", { name: "Ajouter une réponse" });
        await userEvent.click(addAnswerButton);
        await userEvent.click(addAnswerButton);

        const answerInputs = screen.getAllByPlaceholderText("Réponse possible");
        expect(answerInputs).toHaveLength(2);
    })

    it("should call removeQuestion when click on remove question button", async () => {
        setup();

        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton);
        await userEvent.click(addButton);

        const removeButtons = screen.getAllByRole("button", { name: "Supprimer la question" });

        await userEvent.click(removeButtons[0]);

        const questionInputs = screen.getAllByPlaceholderText("Saisir la question");
        expect(questionInputs).toHaveLength(1)
    })


    it("should call removeAnswerFromQuestion when click on remove answer button", async () => {
        setup();

        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton)

        const addAnswerButton = screen.getByRole("button", { name: "Ajouter une réponse" });
        await userEvent.click(addAnswerButton);
        await userEvent.click(addAnswerButton);

        const removeButtons = screen.getAllByRole("button", { name: "Supprimer la réponse" });
        await userEvent.click(removeButtons[0]);

        const answerInputs = screen.getAllByPlaceholderText("Réponse possible")
        expect(answerInputs).toHaveLength(1)

    })

    it("should update poll title when change title input", async () => {
        setup();
        const input = screen.getByPlaceholderText("Entrez le titre du sondage");
        await userEvent.clear(input);
        await userEvent.type(input, "New Poll Title");

        expect(input).toHaveValue("New Poll Title");
    })

    it("should cal updateTitleQuestion when change question input", async () => {
        setup();
        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton);

        const input = screen.getByPlaceholderText("Saisir la question");
        await userEvent.clear(input);
        await userEvent.type(input, "New question");

        expect(input).toHaveValue("New question");

    })

    it("should call updateAnswerForQuestion when change answer input", async () => {
        setup();

        const addButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addButton);

        const addAnswerButton = screen.getByRole("button", { name: "Ajouter une réponse" });
        await userEvent.click(addAnswerButton);

        const input = screen.getByPlaceholderText("Réponse possible");
        await userEvent.clear(input);
        await userEvent.type(input, "New answer");

        expect(input).toHaveValue("New answer");
    })

    it("should enable submit button when all requirements are met", async () => {
        setup();

        // Titre du sondage
        const pollTitleInput = screen.getByPlaceholderText("Entrez le titre du sondage");
        await userEvent.clear(pollTitleInput);
        await userEvent.type(pollTitleInput, "Titre sondage");

        const addQuestionButton = screen.getByRole("button", { name: "Ajouter une question" });
        await userEvent.click(addQuestionButton);
        await userEvent.click(addQuestionButton);

        const questionInputs = screen.getAllByPlaceholderText("Saisir la question")

        await userEvent.clear(questionInputs[0]);
        await userEvent.type(questionInputs[0], "Question 1");

        await userEvent.clear(questionInputs[1]);
        await userEvent.type(questionInputs[1], "Question 2");

        const addAnswerButtons = screen.getAllByRole("button", { name: "Ajouter une réponse" });

        for (let i = 0; i < 2; i++) {
            await userEvent.click(addAnswerButtons[i])
            await userEvent.click(addAnswerButtons[i])

            const answerInputs = screen.getAllByPlaceholderText("Réponse possible").slice(i * 2, i * 2 + 2)

            await userEvent.clear(answerInputs[0])
            await userEvent.type(answerInputs[0], "Réponse 1 pour la Q" + i + 1);

            await userEvent.clear(answerInputs[1])
            await userEvent.type(answerInputs[1], "Réponse 2 pour la Q" + i + 1);
        }

        expect(screen.getByRole("button", { name: "Créer" })).toBeEnabled();

    })
})