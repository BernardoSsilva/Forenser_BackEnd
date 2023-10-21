-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/10/2023 às 05:15
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
-- Estrutura para tabela `boletim_acidente`
--

CREATE TABLE `boletim_acidente` (
  `id_fato` int(11) NOT NULL,
  `data_fato` date NOT NULL,
  `horario` varchar(5) NOT NULL,
  `tipo_local` varchar(20) NOT NULL,
  `endereco` varchar(300) NOT NULL,
  `comunicante` varchar(100) NOT NULL,
  `motorista` varchar(100) NOT NULL,
  `veiculos` varchar(400) NOT NULL,
  `relato_fato` varchar(500) NOT NULL,
  `cod_usu` int(11) NOT NULL
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
(1, 'Bernardo Santos da Slva', '123.008.389.82', '2005-08-08', 'bernardosilva698@gmail.com', '(48)99852-9084', 'M', 'bernardo1227'),
(2, 'Rosane Conceição Santos da Silva', '76936066020', '1964-07-12', 'rosane.santosicm@gmail.com', '(48)99975-5069', 'F', '12345678'),
(3, 'Bernardo Santos', '123.008.389-82', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(4, 'Bernardo Santos', '123.008.389-82', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(5, 'Bernardo Santos', '1230083892', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(6, 'Bernardo Santos', '1230083892', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(7, 'Bernardo Santos', '1230083892', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(8, 'Bernardo Santos', '1230083892', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(9, 'Bernardo Santos', '1230083892', '2005-08-07', 'rosane.santosm@gmail.com', '48998529084', 'M', '4941e2f51e5364077b65f2357d005ec0'),
(10, 'Rosane Conceição Santos da Silva', '76936066020', '2005-08-07', 'rosane.santosicm@gmail.com', '(48)9852-9084', 'F', '25d55ad283aa400af464c76d713c07ad'),
(11, 'Rosane Conceição Santos da Silva', '76936066020', '2005-08-07', 'rosane.santosicm@gmail.com', '(48)9852-9084', 'F', '25d55ad283aa400af464c76d713c07ad'),
(12, 'Rosane Conceição Santos da Silva', '76936066020', '2005-08-07', 'rosane@gmail.com', '(48)9852-9084', 'F', '25d55ad283aa400af464c76d713c07ad'),
(13, 'bernardo', '12300838982', '2005-08-07', 'bernardo0808@gmail.com', '48998529084', 'M', '69f8fe09eac8c229e566b27e38a67893'),
(14, 'LGBT', '123.456.789-10', '1200-08-07', 'lgbt@gmail.com', '(48) 99975-5069', 'F', '25d55ad283aa400af464c76d713c07ad');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `boletim_acidente`
--
ALTER TABLE `boletim_acidente`
  ADD PRIMARY KEY (`id_fato`),
  ADD KEY `cod_usu` (`cod_usu`);

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
-- AUTO_INCREMENT de tabela `boletim_acidente`
--
ALTER TABLE `boletim_acidente`
  MODIFY `id_fato` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `boletim_acidente`
--
ALTER TABLE `boletim_acidente`
  ADD CONSTRAINT `boletim_acidente_ibfk_1` FOREIGN KEY (`cod_usu`) REFERENCES `usuario` (`id_usu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
