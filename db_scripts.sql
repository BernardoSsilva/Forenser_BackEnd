-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/10/2023 às 17:13
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
-- Estrutura para tabela `boletim`
--

CREATE TABLE `boletim` (
  `protocolo` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `data_hora_ocorr` datetime DEFAULT NULL,
  `vitima` varchar(200) NOT NULL,
  `testemunhas` varchar(200) DEFAULT NULL,
  `localizacao` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `casos`
--

CREATE TABLE `casos` (
  `id_caso` int(11) NOT NULL,
  `boletim_at` int(11) NOT NULL,
  `investigador_at` int(11) NOT NULL,
  `face_at` int(11) NOT NULL,
  `usuario_reg` int(11) NOT NULL,
  `status_caso` enum('Fase Investigativa','Audiência de Custódia','Recebimento da Denúncia','Audiência de Instrução e Julgamento','Sentença','Concluido') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `face`
--

CREATE TABLE `face` (
  `id_face` int(11) NOT NULL,
  `imagem` varchar(300) DEFAULT NULL,
  `descricao` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `investigadores`
--

CREATE TABLE `investigadores` (
  `id_inv` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `UF` varchar(2) DEFAULT NULL,
  `endereço` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'Bernardo Santos da Slva', '123.008.389.82', '2005-08-08', 'bernardosilva698@gmail.com', '(48)99852-9084', 'M', 'bernardo1227');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `boletim`
--
ALTER TABLE `boletim`
  ADD PRIMARY KEY (`protocolo`);

--
-- Índices de tabela `casos`
--
ALTER TABLE `casos`
  ADD PRIMARY KEY (`id_caso`),
  ADD KEY `boletim_at` (`boletim_at`),
  ADD KEY `investigador_at` (`investigador_at`),
  ADD KEY `face_at` (`face_at`),
  ADD KEY `usuario_reg` (`usuario_reg`);

--
-- Índices de tabela `face`
--
ALTER TABLE `face`
  ADD PRIMARY KEY (`id_face`);

--
-- Índices de tabela `investigadores`
--
ALTER TABLE `investigadores`
  ADD PRIMARY KEY (`id_inv`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `casos`
--
ALTER TABLE `casos`
  MODIFY `id_caso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `face`
--
ALTER TABLE `face`
  MODIFY `id_face` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `investigadores`
--
ALTER TABLE `investigadores`
  MODIFY `id_inv` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `casos`
--
ALTER TABLE `casos`
  ADD CONSTRAINT `casos_ibfk_1` FOREIGN KEY (`boletim_at`) REFERENCES `boletim` (`protocolo`),
  ADD CONSTRAINT `casos_ibfk_2` FOREIGN KEY (`investigador_at`) REFERENCES `investigadores` (`id_inv`),
  ADD CONSTRAINT `casos_ibfk_3` FOREIGN KEY (`face_at`) REFERENCES `face` (`id_face`),
  ADD CONSTRAINT `casos_ibfk_4` FOREIGN KEY (`usuario_reg`) REFERENCES `usuario` (`id_usu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
