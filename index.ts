import { User } from "./src/domain/entities/user";
import { SetupSignup, Signup } from "./src/domain/features/signup";
import { DefaultReader } from "./src/infra/services/reader";

const signup: Signup = SetupSignup({
    reader: new DefaultReader,
})

await signup({});
await signup({});
