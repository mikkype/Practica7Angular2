export class Task {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public startDate: Date | undefined,
      public endDate: Date | undefined,
      public subject: string,
      public personCharge: string,
      public approxTime: number,
      public realTime: number | undefined,
    ) {}
  }