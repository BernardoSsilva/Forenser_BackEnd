-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/11/2023 às 07:05
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `forencer_data`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamento`
--

CREATE TABLE `agendamento` (
  `id_agendamento` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `cod_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `boletins_unificados`
--

CREATE TABLE `boletins_unificados` (
  `id_fato` int(11) NOT NULL,
  `tipo` enum('acidente','roubo','violencia_domestica') NOT NULL,
  `violencia` enum('S','N') DEFAULT NULL,
  `subtracao` enum('S','N') DEFAULT NULL,
  `data_fato` date NOT NULL,
  `horario` varchar(10) NOT NULL,
  `tipo_local` varchar(100) NOT NULL,
  `endereco` varchar(500) NOT NULL,
  `comunicante` varchar(600) NOT NULL,
  `motorista` varchar(100) NOT NULL,
  `veiculos` varchar(400) NOT NULL,
  `vitima` varchar(600) NOT NULL,
  `objetos` varchar(600) NOT NULL,
  `relato_fato` varchar(3000) NOT NULL,
  `cod_usuario` int(11) DEFAULT NULL,
  `cod_face` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `boletins_unificados`
--

INSERT INTO `boletins_unificados` (`id_fato`, `tipo`, `violencia`, `subtracao`, `data_fato`, `horario`, `tipo_local`, `endereco`, `comunicante`, `motorista`, `veiculos`, `vitima`, `objetos`, `relato_fato`, `cod_usuario`, `cod_face`) VALUES
(40, 'roubo', 'S', 'S', '2023-11-07', '20:30', 'Via Pública', 'Av. victor meireles, proximo ao corpo de bombeiros', 'Bernardo Santos da Silva', '', '', 'Vitorio Gabriel Zanelatto ', 'Uma carteira contendo um cartão de credito, identidade e 200 reais em espécie', 'Durante um periodo de caminhada um homem se aproximou da vitima, e portando uma faca, a ameaçou e tomou sua carteira, apos o roubo o homem saiu correndo em direção a faculdade esucri', 25, 24);

-- --------------------------------------------------------

--
-- Estrutura para tabela `denuncias`
--

CREATE TABLE `denuncias` (
  `id_denuncia` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `local` varchar(200) NOT NULL,
  `descricao_den` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `denuncias`
--

INSERT INTO `denuncias` (`id_denuncia`, `nome`, `local`, `descricao_den`) VALUES
(1, 'Bernardo Santos da Silva', 'Rua João caetano, 651, proximo a uma fabrica de vidro', 'Os moradores da casa numero 651 realizam constantes festas após o horario, sendo grande parte iniciada as 23:30, perturbando a paz da vizinhança');

-- --------------------------------------------------------

--
-- Estrutura para tabela `face`
--

CREATE TABLE `face` (
  `id_face` int(11) NOT NULL,
  `imagem` varchar(1000) DEFAULT NULL,
  `descricao` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `face`
--

INSERT INTO `face` (`id_face`, `imagem`, `descricao`) VALUES
(23, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-bKG92fKP5GVoLi1fHMDS8p35/user-7YHV5uJPBcJ8zaZx0c75SBDT/img-Ba347bvn0WcLOwqNR45SmtpZ.png?st=2023-11-15T17%3A47%3A27Z&se=2023-11-15T19%3A47%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-15T15%3A54%3A42Z&ske=2023-11-16T15%3A54%3A42Z&sks=b&skv=2021-08-06&sig=pQMhopcQB2TCmYMGbc1cddf7Sk5xIyN1oDGK0Ws8Wk4%3D', 'a highly realistic portrayal of a young white male with black long hair, round eyes, square face, large mouth, pointy nose, none beard, and coiled hair type.'),
(24, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-bKG92fKP5GVoLi1fHMDS8p35/user-7YHV5uJPBcJ8zaZx0c75SBDT/img-BRtOQb1tU0AeUuIZZfu3TCrF.png?st=2023-11-15T18%3A40%3A39Z&se=2023-11-15T20%3A40%3A39Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-15T15%3A48%3A38Z&ske=2023-11-16T15%3A48%3A38Z&sks=b&skv=2021-08-06&sig=J1HLx81kopa5uVLtIAbivfC9iq4ilC2D6j/3d6N5gQM%3D', 'a highly realistic portrayal of a teen medium male with blonde medium hair, almond eyes, oval face, medium mouth, snub nose, stubble beard, and straight hair type.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usu` int(11) NOT NULL,
  `nome_usu` varchar(100) DEFAULT NULL,
  `cpf_usu` varchar(15) DEFAULT NULL,
  `data_nasc` date NOT NULL,
  `email_usu` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `sexo` enum('M','F') DEFAULT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usu`, `nome_usu`, `cpf_usu`, `data_nasc`, `email_usu`, `telefone`, `sexo`, `senha`) VALUES
(25, 'Bernardo Santos da SIlva', '123.008.389-82', '2005-08-07', 'bernardosilva268@gmail.com', '(48) 9 9678-291', 'M', '25d55ad283aa400af464c76d713c07ad');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agendamento`
--
ALTER TABLE `agendamento`
  ADD PRIMARY KEY (`id_agendamento`),
  ADD KEY `cod_usu` (`cod_usuario`);

--
-- Índices de tabela `boletins_unificados`
--
ALTER TABLE `boletins_unificados`
  ADD PRIMARY KEY (`id_fato`),
  ADD KEY `cod_usuario` (`cod_usuario`),
  ADD KEY `cod_face` (`cod_face`);

--
-- Índices de tabela `denuncias`
--
ALTER TABLE `denuncias`
  ADD PRIMARY KEY (`id_denuncia`);

--
-- Índices de tabela `face`
--
ALTER TABLE `face`
  ADD PRIMARY KEY (`id_face`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agendamento`
--
ALTER TABLE `agendamento`
  MODIFY `id_agendamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `boletins_unificados`
--
ALTER TABLE `boletins_unificados`
  MODIFY `id_fato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id_denuncia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `face`
--
ALTER TABLE `face`
  MODIFY `id_face` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agendamento`
--
ALTER TABLE `agendamento`
  ADD CONSTRAINT `agendamento_ibfk_1` FOREIGN KEY (`cod_usuario`) REFERENCES `usuario` (`id_usu`);

--
-- Restrições para tabelas `boletins_unificados`
--
ALTER TABLE `boletins_unificados`
  ADD CONSTRAINT `boletins_unificados_ibfk_1` FOREIGN KEY (`cod_usuario`) REFERENCES `usuario` (`id_usu`),
  ADD CONSTRAINT `boletins_unificados_ibfk_2` FOREIGN KEY (`cod_face`) REFERENCES `face` (`id_face`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
