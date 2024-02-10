import { Signup, SetupSignup } from "../../domain/features/signup";
import { DefaultCypher } from "../../infra/services/cypher";
import { DefaultDecriptor } from "../../infra/services/decriptor";

export const signupService: Signup = SetupSignup({
    cypher: new DefaultCypher,
    decriptor: new DefaultDecriptor
})
