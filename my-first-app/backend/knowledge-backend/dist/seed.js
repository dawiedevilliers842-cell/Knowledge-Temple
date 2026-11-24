import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { SeedService } from './seed/seed.service.js';
async function bootstrap() {
    const appContext = await NestFactory.createApplicationContext(AppModule);
    try {
        const seeder = appContext.get(SeedService);
        await seeder.seed();
    }
    catch (error) {
        console.error('Seeding failed:', error);
        process.exitCode = 1;
    }
    finally {
        await appContext.close();
    }
}
bootstrap();
//# sourceMappingURL=seed.js.map