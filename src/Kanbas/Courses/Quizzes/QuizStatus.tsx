

export default function QuizStatus(
    { quiz }:
        {
            quiz: {
                qid: number,
                title: string,
                type: string,
                point: number,
                dueDate: string,
                availibleDate: string,
                untilDate: string
                numberOfP: number
                isPublished: boolean
            }
        }


) {

    const currentDate = new Date();
    const availableDate = new Date(quiz.availibleDate);
    const untilDate = new Date(quiz.untilDate);
    const dueDate = new Date(quiz.dueDate);

    // Determine availability status
    let status = "";
    if (currentDate < availableDate) {
        status = `Not available until ${availableDate.toLocaleDateString()} at ${availableDate.toLocaleTimeString()}`;
    } else if (currentDate >= availableDate && currentDate <= untilDate) {
        status = "Available";
    } else {
        status = "Closed";
    }

    return (
        <div className="flex flex-col gap-2">
            <span style={{ fontWeight: "bold" }}>{status}</span> | Due {dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()} | {quiz.point} pts | {quiz.numberOfP} Questions
            
        </div>
    )
}