create database if not exists db_datos;
use db_datos;

create table tb_users(
	id_usuario int not null auto_increment primary key,
    nombre varchar(45),
    username varchar(45),
    correo varchar(45),
    contraseña varchar(45),
    biografia varchar(45),
    fecha date
);
create table tb_juegos(
	id_juego int not null auto_increment primary key,
    nombre varchar(45),
    descripcion varchar(45),
    cartucho varchar(45),
    fecha date,
    consola_id_consola int
);
insert into tb_juegos (nombre,descripcion,cartucho,fecha) values ('Super Mario 64','Es el primer juego de Mario en 3D','https://http2.mlstatic.com/D_NQ_NP_789251-MLM31781201755_082019-O.jpg',1996);
insert into tb_juegos (nombre,descripcion,cartucho,fecha) values ('Megaman x','Es una saga de juegos de megaman','https://cdn.shopify.com/s/files/1/0580/0965/products/cdg62GhaS0yefbCCQDvQ_web_productimages_megamanx_cartridge_2.jpg',1996);
insert into tb_juegos (nombre,descripcion,cartucho,fecha) values ('Crash bandicoot','Es el primer juego del marsupial','https://as.com/meristation/imagenes/2020/06/30/reportajes/1593535178_257563_1593617332_sumario_normal.jpg',1996);
insert into tb_juegos (nombre,descripcion,cartucho,fecha) values ('Sonic the hedgehog','El primer juego del erizo azul','https://ae01.alicdn.com/kf/Ha3e09a1052be47aa9042dcebd2c90db25/Sonic-el-Hedgehog-1-cartucho-de-juego-de-16-bits-tarjeta-de-juego-MD-con-caja.jpg',1991);
insert into tb_juegos (nombre,descripcion,cartucho,fecha) values ('Metroid','Juego de samus','https://http2.mlstatic.com/D_NQ_NP_653255-MLM42376690840_062020-W.jpg',1986);


create table tb_consola(
	id_consola int not null auto_increment primary key,
    nombre varchar(45)
);
insert into tb_consola (nombre) values ('Nintendo 64');
insert into tb_consola (nombre) values ('Super nintendo');
insert into tb_consola (nombre) values ('Playstation 1');
insert into tb_consola (nombre) values ('Genesis');
insert into tb_consola (nombre) values ('Super nintendo');

create table tb_biblioteca(
	id_biblioteca int not null auto_increment primary key,
    user_id_username int,
    juego_id_juego int,
    puntuacion int,
    opinion varchar(45)
);
create table tb_publicacion(
	id_publicacion int not null auto_increment primary key,
    fecha date,
    user_id_username int,
    juego_id_juego int,
    comentario varchar(45)
);
create table tb_comentarios(
	id_publicacion int not null auto_increment primary key,
    fecha date,
    user_id_username int,
    publicacion_id_publicacion int,
    comentario varchar(45)
);
