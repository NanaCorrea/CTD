use projeto_spotify;

select*from generoxcancao;
select*from cancao;
select*from genero;

SELECT gc.idGeneroxcancao, c.titulo, g.Genero from generoxcancao as gc
inner join genero g on g.idGenero = gc.IdGenero
inner join cancao c on c.idcancao = gc.Idcancao
group by g.Genero;