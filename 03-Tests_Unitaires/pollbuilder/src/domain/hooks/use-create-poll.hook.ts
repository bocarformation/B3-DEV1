import { useState } from "react";
import { PollModel } from "../model/poll-model";

export const useCreatePoll = () => {

    function updateTitle(title: string) {
        setForm({
            ...form,
            pollTitle: title
        })
    }

    function addQuestion() {
        setForm({
            ...form,
            questions: [
                ...form.questions,
                {
                    id: String(crypto.randomUUID()),
                    title: "",
                    answers: []
                }
            ]
        })
    }
    function removeQuestion(questionId: string) {
        setForm({
            ...form,
            questions: form.questions.filter(q => q.id !== questionId)
        })
    }
    function updateTitleQuestion(questionId: string, value: string) {
        setForm({
            ...form,
            questions: form.questions.map(q => {
                if (q.id === questionId) {
                    return {
                        ...q,
                        title: value
                    }
                }
                return q
            })
        })
    }

    function addAnswerToQuestion(questionId: string) {
        setForm({
            ...form,
            questions: form.questions.map(q => {
                if (q.id === questionId) {
                    return {
                        ...q,
                        answers: [...q.answers,
                        {
                            id: crypto.randomUUID(),
                            title: ""
                        }
                        ]
                    }
                }
                return q
            })
        })
    }
    function removeAnswerFromQuestion(questionId: string, answerId: string) {
        setForm({
            ...form,
            questions: form.questions.map(q => {
                if (q.id === questionId) {
                    return {
                        ...q,
                        answers: q.answers.filter(a => a.id !== answerId)
                    }

                }
                return q
            }
            )
        })
    }
    function updateAnswerForQuestion(questionId: string, answerId: string, value: string) {
        setForm({
            ...form,
            questions: form.questions.map(q => {
                if (q.id === questionId) {
                    return {
                        ...q,
                        answers: q.answers.map(a => {
                            if (a.id === answerId) {
                                return {
                                    ...a,
                                    title: value
                                }
                            }
                            return a
                        })
                    }
                }
                return q
            })
        })
    }


    function submitPoll() {

    }
    function isSubmittable() {
        return form.pollTitle !== "" &&
            form.questions.length >= 2 &&
            form.questions.every(q => q.title !== "") &&
            form.questions.every(q => q.answers.length >= 2) &&
            form.questions.every(q => q.answers.every(a => a.title !== ""))
    }

    const [form, setForm] = useState<PollModel.Form>({
        pollTitle: "",
        questions: []
    })

    return {
        updateTitle,
        addQuestion,
        updateTitleQuestion,
        removeQuestion,
        addAnswerToQuestion,
        updateAnswerForQuestion,
        removeAnswerFromQuestion,
        form,
        isSubmittable: isSubmittable(),
        submitPoll
    }

}