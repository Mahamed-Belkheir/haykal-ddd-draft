export class Config {
    public readonly server = {
        port: process.env.PORT || "8000",
        env: process.env.NODE_ENV || "development"
    }
    public readonly applicationName = "haykal-draft";
}