use projeto_spotify;

select*from cancao;
select*from genero;
select*from generoxcancao WHERE IdGenero = 9;

alter table generoxcancao drop CONSTRAINT Cancao;
alter table playlistxcancao drop CONSTRAINT Idcancao;

delete cancao from cancao INNER JOIN generoxcancao on cancao.idcancao = generoxcancao.idcancao
where (generoxcancao.idgenero = 9);