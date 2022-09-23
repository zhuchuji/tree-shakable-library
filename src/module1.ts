export default class Module1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getModule1Name(): string {
    return this.name;
  }

  public setModule1Name(name: string): void {
    this.name = name;
  }
}