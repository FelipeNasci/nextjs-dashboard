export class Http {
  constructor(
    private readonly baseUrl: string,
    private readonly params?: any
  ) {}

  public async get<T>(resource?: string): Promise<T> {
    const url = `${this.baseUrl}${resource}`;
    const response = await fetch(url, this.params);
    return response.json();
  }
}
