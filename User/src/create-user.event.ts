export class CreateUserEvent {
    constructor(readonly email: string, readonly password: string) {}
}