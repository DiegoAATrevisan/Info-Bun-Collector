import { User } from "./src/domain/entities/user";
import { SetupSignup, Signup } from "./src/domain/features/signup";
import { DefaultCypher } from "./src/infra/services/cypher";
import { DefaultDecriptor } from "./src/infra/services/decriptor";
import { DefaultReader } from "./src/infra/services/reader";

const signup: Signup = SetupSignup({
    reader: new DefaultReader,
    cypher: new DefaultCypher,
    decriptor: new DefaultDecriptor
})

await signup({});
