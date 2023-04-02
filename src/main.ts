import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core"

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule)
        const PORT = process.env.PORT
        const config = new DocumentBuilder()
            .setTitle('NestJS TEST')
            .setDescription('REST API')
            .setVersion('1.0.0')
            .addTag('NodeJS, NestJS, Postgres, sequlize')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/api/docs', app, document);
        app.setGlobalPrefix('api')
        app.listen(PORT, ()=> {
        console.log(`Server is running on ${PORT}`);
    });
    } catch (error) {
        console.log(error);        
    }    
}

start();