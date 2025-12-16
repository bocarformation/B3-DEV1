export class DateConverter {

   static convertToDate(dateString: string): Date{
        const[day,month, year] = dateString.split("/")


        return new Date(`${year}-${Number(month) - 1}-${day}`)
    }
}