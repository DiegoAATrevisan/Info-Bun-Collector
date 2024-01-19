import { User } from "./src/domain/entities/user";
import { Colector, SetupColector } from "./src/domain/features/colect";
import { DefaultReader } from "./src/infra/services/reader";

const colector: Colector = SetupColector({
    reader: new DefaultReader,
    user: new User
})

console.log(await colector());
