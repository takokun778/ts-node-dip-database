import { UserManager } from '@/infra/typeorm/user-manager';
import { UserGateway } from '@/interface/gateway/user-gateway';
import { User } from '@/domain/user';
import { UserInteractorCreate, UserInteractorCreateInput } from '@/interactor/user/user-interactor-create';
import { UserInteractorRead, UserInteractorReadInput } from '@/interactor/user/user-interactor-read';
// import { createConnection } from 'typeorm';
import { UserPrisma } from '@/infra/prisma/user-prisma';

(async function () {
    // const connection = await createConnection();

    // const userManager = new UserManager();

    // const userGateway = new UserGateway(userManager);
    
    const userPrisma = new UserPrisma();

    const userGateway = new UserGateway(userPrisma);

    const userInteractorCreate = new UserInteractorCreate(userGateway);

    const userInteractorRead = new UserInteractorRead(userGateway);

    const name = new User.Name('大園玲');

    const created = await userInteractorCreate.execute(new UserInteractorCreateInput(name));

    console.log(created.user);

    const id = new User.Id(created.user.id.value);

    const found = await userInteractorRead.execute(new UserInteractorReadInput(id));

    console.log(found.user);

    // connection.close();
})();
