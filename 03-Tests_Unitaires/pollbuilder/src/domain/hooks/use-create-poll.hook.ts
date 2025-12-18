import { useState } from "react";
import { PollModel } from "../model/poll-model";

export const useCreatePoll = () => {

    function updateTitle(value: string) { }

    function addQuestion() { }
    function removeQuestion(questionId: string) { }
    function updateTitleQuestion(questionId: string, value: string) { }

    function addAnswerToQuestion(questionId: string) { }
    function removeAnswerFromQuestion(questionId: string, answerId: string) { }
    function updateAnswerForQuestion(questionId: string, answerId: string, value: string) { }


    function submitPoll() { }
    function isSubmittable() {
        return false;
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