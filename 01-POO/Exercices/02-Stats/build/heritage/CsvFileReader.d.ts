export declare abstract class CsvFileReader<T> {
    private readonly filename;
    data: T[];
    constructor(filename: string);
    read(): void;
    abstract mapRow(row: string[]): T;
}
//# sourceMappingURL=CsvFileReader.d.ts.map