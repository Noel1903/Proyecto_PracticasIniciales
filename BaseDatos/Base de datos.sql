create database if not exists db_datos;
use db_datos;
SET FOREIGN_KEY_CHECKS=0;
create table tb_users(
	id_usuario int not null auto_increment primary key,
    nombre varchar(45),
    apellido varchar(45),
    username varchar(45),
    correo varchar(45),
    contraseña varchar(45),
    biografia varchar(45),
    fecha date
);
insert into tb_users (nombre,apellido,username,correo,contraseña,biografia,fecha) values ('admin','admin','admin','admin@admin.com','123','soy el admin',1999);
create table tb_juegos(
	id_juego int not null auto_increment primary key,
    id_consola int not null,
    nombre varchar(45),
    descripcion varchar(45),
    cartucho varchar(45),
    fecha date,
    FOREIGN KEY (id_consola) references tb_consola(id_consola)
);

insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (1,'Super Mario 64','Es el primer juego de Mario en 3D','https://http2.mlstatic.com/D_NQ_NP_789251-MLM31781201755_082019-O.jpg',1996);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Megaman x','Es una saga de juegos de megaman','https://cdn.shopify.com/s/files/1/0580/0965/products/cdg62GhaS0yefbCCQDvQ_web_productimages_megamanx_cartridge_2.jpg',1996);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (3,'Crash bandicoot','Es el primer juego del marsupial','https://as.com/meristation/imagenes/2020/06/30/reportajes/1593535178_257563_1593617332_sumario_normal.jpg',1996);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Sonic the hedgehog','El primer juego del erizo azul','https://ae01.alicdn.com/kf/Ha3e09a1052be47aa9042dcebd2c90db25/Sonic-el-Hedgehog-1-cartucho-de-juego-de-16-bits-tarjeta-de-juego-MD-con-caja.jpg',1991);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Metroid','Juego de samus','https://http2.mlstatic.com/D_NQ_NP_653255-MLM42376690840_062020-W.jpg',1986);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (6,'Wario Land: Super Mario Land 3 ','es un videojuego de plataformas desarrollado y distribuido por Nintendo','https://i.ebayimg.com/thumbs/images/g/fLAAAOSwz0BgWqKB/s-l300.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (6,'Kirby´s Dream Land','Fue el primer juego de la serie de Kirby.','https://i.ebayimg.com/images/g/LtYAAOSwAetdSZVz/s-l300.jpg',1992);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (6,'Donkey Kong Country','Incluye la familia del popular personaje de videojuegos, Donkey Kong.','https://ae01.alicdn.com/kf/HTB1d0cZXcrrK1RjSspaq6AREXXam/Cartucho-de-juego-Donkey-Kong-Country-1-2-3-ARPG-bater-a-Ahorre-la-versi-n.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (6,'Disney´s Aladdin','Es un videojuego de plataformas basado en la película de 1992 del mismo nombre.','https://i.ebayimg.com/images/g/TIMAAOSwWIlfoQlw/s-l300.jpg',1993);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (6,'Donkey Kong Land','Es una continuación completamente nueva al original Donkey Kong Country','https://www.guiltybit.com/wp-content/uploads/2012/09/dklgb004.jpg',1995);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Kirby Super Star','Para empezar este juego consiste en ir jugando divertidos capitulos que nos cuentan distintas historias, como La venganza de Meta Knight','https://http2.mlstatic.com/D_NQ_NP_907361-MLC31566396824_072019-O.jpg',1996);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'EarthBound','A diferencia de otros juegos de ese tipo, sitúa la historia en un contexto "real" y contemporáneo. Es la segunda entrega de la saga y la única que salió de Japón','https://images-na.ssl-images-amazon.com/images/I/41kIbxklMtL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA19%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Star Fox','Inicio de la saga del mismo nombre','https://http2.mlstatic.com/D_NQ_NP_655507-MLM31500890863_072019-V.jpg',1993);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Contra III: The Alien Wars','Es el nombre del tercer juego de la serie Contra de Konami.','https://i.ebayimg.com/images/g/hUAAAOSw7GpgED~D/s-l300.jpg',1992);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Street Fighter II: Hyper Fighting','Es un videojuego de lucha publicado originalmente en Japón ','https://i.blogs.es/9c91d4/01-street_fighter_ii-sn-1-/840_560.jpg',1992);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (2,'Super Punch Out!!','Es un videojuego de boxeo para la Super Nintendo.','https://d3ugyf2ht6aenh.cloudfront.net/stores/906/459/products/punchout1-4393e44eed8c2cb98d15978940989970-1024-1024.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Comix Zone','Es un videojuego de acción estilo arcade','https://www.neoelectronics.com.br/image/cache/catalog/produtos/Comix%20zone-800x800.png',1995);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Streets of Rage','Es un videojuego de tipo beat ´em up con scroll lateral publicado por Sega','https://ae01.alicdn.com/kf/He596f9df84fb49108145be0b12ca4a61h/Calles-de-Rage-para-SEGA-GENESIS-Mega-Drive-cartucho-de-juego-de-16-bits-para-PAL.jpg',1991);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Gunstar Heroes','Es un videojuego de correr y disparar desarrollado por Treasure y publicado por Sega.','https://images-na.ssl-images-amazon.com/images/I/51ile1lgEnL._AC_.jpg',1993);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Sonic & Knuckles','Es un videojuego de plataformas de la serie de Sonic the Hedgehog, hecho por Sega, originalmente para Mega Drive.','https://i0.wp.com/segaretro.org/images/thumb/1/13/Sonic3%26KnucklesCart.jpg/220px-Sonic3%26KnucklesCart.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'ToeJam & Earl','Es un juego de acción desarrollado por Johnson Voorsanger','https://i.ebayimg.com/images/g/Sk4AAOSwLYBfqbzr/s-l300.jpg',1991);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Golden Axe','El juego se desarrolló originalmente para ser ejecutado en la placa arcade System 16, aunque también gozó de versiones en la Master System, Mega Drive y otras videoconsolas','https://i.ebayimg.com/images/g/ODUAAOSw6zNdXtL1/s-l300.jpg',1989);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Dr. Robotnik´s Mean Bean Machine','Es un videojuego dentro del universo Sonic lanzado por Sega','https://images-na.ssl-images-amazon.com/images/I/518JtKpNIiL._SX342_.jpg',1993);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Castlevania','Es un videojuego de la franquicia Castlevania, desarrollado por Konami','https://images-na.ssl-images-amazon.com/images/I/51LXVODKC%2BL._AC_.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Shinobi III: Return of the Ninja Master','conocido en Japón como The Super Shinobi II, es un videojuego de la serie Shinobi de Sega','https://i.ebayimg.com/thumbs/images/g/kMgAAOSwZR5gISSO/s-l300.jpg',1989);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Contra: Hard Corps','Publicado en Europa como Probotector y en Japón como 魂斗羅 ザ・ハードコア, es un videojuego para el sistema Mega Drive.','https://i.ebayimg.com/images/g/skgAAOSwIFBfsvVK/s-l300.jpg',1994);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (4,'Kid Chameleon','La premisa del juego es que el personaje principal, Casey, puede utilizar máscaras para transformarse en personajes diferentes con el fin de utilizar diferentes habilidades','https://www.dhresource.com/0x0/f2/albu/g5/M01/CB/D0/rBVaJFknnVCAXqd6AAbJttMLp8M171.jpg',1992);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (7,'The Legend of Zelda','Es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka','https://images-na.ssl-images-amazon.com/images/I/41WYTdSVfjL._AC_.jpg',1986);
insert into tb_juegos (id_consola,nombre,descripcion,cartucho,fecha) values (7,'Final Fantasy','Es una franquicia de medios creada por Hironobu Sakaguchi y desarrollada por Square Enix','https://ae01.alicdn.com/kf/HTB1WmYpajnuK1RkSmFPq6AuzFXaZ/Cartucho-de-juego-FINAL-FANTASY-VII-para-consola-NES.jpg_q50.jpg',1987);

create table tb_consola(
	id_consola int not null auto_increment primary key,
    nombre varchar(45)
);
insert into tb_consola (nombre) values ('Nintendo 64');
insert into tb_consola (nombre) values ('Super nintendo');
insert into tb_consola (nombre) values ('Playstation 1');
insert into tb_consola (nombre) values ('Genesis');
insert into tb_consola (nombre) values ('Super nintendo');
insert into tb_consola (nombre) values ('Gameboy');
insert into tb_consola (nombre) values ('NES');

create table tb_biblioteca(
	id_biblioteca int not null auto_increment primary key,
    id_username int not null,
    id_juego int not null,
    FOREIGN KEY (id_username) references tb_users(id_usuario),
    FOREIGN KEY (id_juego) references tb_juegos(id_juego),
    puntuacion int,
    opinion varchar(45)
);
create table tb_publicacion(
	id_publicacion int not null auto_increment primary key,
    fecha date,
    id_username int not null,
    id_juego int not null,
    FOREIGN KEY (id_username) references tb_users(id_usuario),
    FOREIGN KEY (id_juego) references tb_juegos(id_juego),
    comentario varchar(45)
);
create table tb_comentarios(
	id_publicacion int not null auto_increment primary key,
    fecha date,
    id_username int not null,
    id_jpublicacion int not null,
    FOREIGN KEY (id_username) references tb_users(id_usuario),
    FOREIGN KEY (id_publicacion) references tb_publicacion(id_publicacion),
    comentario varchar(45)
);