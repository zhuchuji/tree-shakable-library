export default class Module2 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getModule2Name(): string {
    return this.name;
  }

  public setModule2Name(name: string): void {
    this.name = name;
  }
}