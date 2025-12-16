export class DateConverter {
    static convertToDate(dateString) {
        const [day, month, year] = dateString.split("/");
        return new Date(`${year}-${Number(month) - 1}-${day}`);
    }
}
//# sourceMappingURL=utils.js.map