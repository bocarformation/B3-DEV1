import { render, screen } from "@testing-library/react"
import { Question } from "../components/Question"
import { PollModel } from "../domain/model/poll-model";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("Question", () => {

    type Props = {
        question: PollModel.Question,
        onChange: (id: string, value: string) => void,
        addAnswer: (id: string) => void,
        removeAnswer: (id: string, answerId: string) => void,
        updateAnswer: (id: string, answerId: string, value: string) => void
    }

    const onChange = jest.fn();
    const addAnswer = jest.fn();
    const removeAnswer = jest.fn();
    const updateAnswer = jest.fn();

    const question: PollModel.Question = {
        id: "1",
        title: "Quel sport pratiques-tu ?",
        answers: [
            { id: "1", title: "Tennis" },
            { id: "2", title: "Badminton" }
        ]
    };

    const Wrapper = (props?: Partial<Props>) => {
        const [title, setTitle] = useState(question.title);
        const [answers, setAnswers] = useState(question.answers)
        const wrapperQuestion: PollModel.Question = {
            ...question,
            title,
            answers
        }
        return <Question
            question={wrapperQuestion}
            onChange={(id, value) => {
                setTitle(value);
                onChange(id, value)
            }}
            addAnswer={props?.addAnswer ?? (() => { })}
            removeAnswer={(_, answerId) => {
                setAnswers((prev) => prev.filter(a => a.id !== answerId));
                removeAnswer(question.id, answerId)
            }}
            updateAnswer={(_, answerId, value) => {
                setAnswers(prev => prev.map(a => a.id === answerId ? {...a, title: value}: a))
                updateAnswer(question.id, answerId, value)
            }

        }
        />


    }



    const setup = (props?: Partial<Props>) => {
        render(<Wrapper {...props} />)
    };

    it("should display input", () => {
        setup();
        expect(screen.getByDisplayValue("Quel sport pratiques-tu ?")).toBeInTheDocument();
    });

    it("should display add button", () => {
        setup();
        expect(screen.getByRole("button", { name: "Ajouter une réponse" })).toBeInTheDocument();
    });

    it("should call onChange when input is changed", async () => {
        setup();
        const input = screen.getByDisplayValue("Quel sport pratiques-tu ?");
        await userEvent.clear(input);
        await userEvent.type(input, "Quel est ton joueur préféré ?");

        expect(onChange).toHaveBeenCalledWith("1", "Quel est ton joueur préféré ?");
    });



    it("should display all answers", () => {
        setup();
        expect(screen.getByDisplayValue("Tennis")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Badminton")).toBeInTheDocument();
        expect(screen.getAllByPlaceholderText("Réponse possible")).toHaveLength(2);
    })


    it("should call addAnswer when click on add button", async () => {
        setup({ addAnswer });
        const addButton = screen.getByRole("button", { name: "Ajouter une réponse" });
        await userEvent.click(addButton);
        expect(addAnswer).toHaveBeenCalledWith("1");
    })

    it("should call removeAnswer when click on remove button", async () => {
        setup({ removeAnswer })
        const removeButton = screen.getAllByRole("button", { name: "Supprimer la réponse" })[0];
        await userEvent.click(removeButton);

        expect(removeAnswer).toHaveBeenCalledWith("1", "1");
        expect(screen.getAllByPlaceholderText("Réponse possible")).toHaveLength(1)

    })


    it("should call updateAnswer when response is changed", async () => {
        setup();
        const input = screen.getByDisplayValue("Tennis");
        await userEvent.clear(input);
        await userEvent.type(input, "Football");

        expect(updateAnswer).toHaveBeenCalledWith("1", "1", "Football");
        expect(screen.getByDisplayValue("Football")).toBeInTheDocument();
    })

})