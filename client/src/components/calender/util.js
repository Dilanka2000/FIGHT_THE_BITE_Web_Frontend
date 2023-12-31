import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 0)).day();
    let currentMonthCount = 0 - firstDayOfMonth;

    const daysMatrix = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });

    if (daysMatrix[5][0].format("DD") < 20) {
        daysMatrix.splice(5, 1);
    }

    return daysMatrix;
}