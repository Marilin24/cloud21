#inicializar el proyecto
npm init -y
#instalar dependencias
npm install express #framework de desarollo en node
npm install kenx    #para configuracion de la base de datos
npm install objection  #para instalar el orm de node
npm install mysql2    #para instalar la odbc  de Mysql

#instalar una libreria para levantar el servidor
npm install --save-dev nodemon

#com siguiente paso procedemos a generar un archuvi js
npx knex init 
#crear migrasiones 
npx knex migrate:make nombre de la tabla
npxknex migrate: latest


pasos para hacer que funcione en windows 
1. Cambiar el knexfile el usuario y la contrasena 
2. Index cambiar puerto             



en ubuntu

      user: 'apli_mishell',  //root
      password:'123456',    //
      database: 'cloud2'


      const port = 3001;



      