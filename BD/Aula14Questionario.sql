SELECT  cancoes.id, cancoes.nome, cancoes.compositor, generos.nome
FROM cancoes, generos
where cancoes.id_genero = generos.id;

SELECT cancoes.id, cancoes.nome, cancoes.compositor, generos.nome
FROM cancoes
INNER JOIN generos
On cancoes.id_genero = generos.id
WHERE cancoes.compositor = 'Willie Dixon' AND generos.nome = 'Blues';

SELECT cancoes.id, cancoes.nome, generos.nome
FROM cancoes
INNER JOIN generos
On cancoes.id_genero = generos.id
WHERE generos.nome = 'Rock';

SELECT albuns.titulo, artistas.nome
FROM albuns
INNER JOIN artistas
On albuns.id_artista = artistas.id;

SELECT cancoes.nome, tipos_de_arquivo.nome
FROM cancoes
INNER JOIN tipos_de_arquivo
On cancoes.id_tipo_de_arquivo = tipos_de_arquivo.id
WHERE tipos_de_arquivo.nome = 'MPEG audio file';

SELECT DISTINCT empregados.titulo
from empregados;

SELECT DISTINCT cancoes.nome, playlists.nome
FROM cancoes
INNER JOIN cancoes_playlists
ON cancoes.id = cancoes_playlists.id_cancao
INNER JOIN playlists
On cancoes_playlists.id_playlist = playlists.id;

SELECT concat('A música ', nome, 'foi composta por ', compositor, '.')
FROM cancoes;

SELECT coalesce(estado_cobranca, pais_cobranca, cep_cobranca)
FROM faturas;

SELECT datediff(data_contratacao, data_nascimento)
FROM empregados;

SELECT extract(MONTH FROM data_fatura)
from faturas
WHERE id_cliente = 2;