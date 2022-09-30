-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2022 a las 03:25:12
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(11) NOT NULL,
  `url` text COLLATE utf8_spanish_ci NOT NULL,
  `short` text COLLATE utf8_spanish_ci NOT NULL,
  `aux1` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `url`, `short`, `aux1`) VALUES
(11, 'https://www.a2hosting.com/kb/developer-corner/mysql/connecting-to-mysql-using-node-js', 'HLhDMaqEot', 'HLhDMaqEot'),
(16, 'https://web.whatsapp.com/', 'BIlK2oBcbh', ''),
(20, 'https://learn.microsoft.com/es-es/previous-versions/office/troubleshoot/office-developer/encode-and-decode-attachment-using-visual-c-in-infopath-2003', '3oRoitsX3Z', ''),
(21, 'http://localhost/phpmyadmin/index.php?route=/sql&db=api&table=registros&pos=0', '8esUCSIE5z', ''),
(22, 'http://localhost/phpmyadmin/index.php?route=/sql&db=api&table=registros&pos=0', 'iSklutXmvr', ''),
(23, 'http://localhost/phpmyadmin/index.php?route=/sql&db=api&table=registros&pos=0', 'LD2P4fFB5g', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
