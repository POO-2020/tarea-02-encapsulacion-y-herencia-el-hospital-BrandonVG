# Encapsulación y Herencia de la POO

<img src="img/hospital.jpg" width="800">

## El Hospital

Se requiere desarrollar un sistema web que permita administrar las citas de pacientes. Para este sistema se ha diseñado la siguiente arquitectura la cual deberás implementar utilizando JavaScript

<img src="img/diagrama-uml.png" width="800">

## Requisitos

- Todas las clases deberán estár encapsuladas
- Sólo se proveerán los métodos de acceso (lectura y/o escritura) que se requieran

Esta tarea es continuación de la tarea 01 Conceptos básicos, por lo que se puede utilizar ese código como base y realizar los ajustes necesarios para que se cumpla con los nuevos requerimientos,

## Descripción de clases

La mayoría de los detalles de las clases para su implementación se pueden obtener del diagrama UML. Sin embargo a continuación se presentan algunas precisiones para algunos métodos o atributos de las clases

### La clase Fecha

- Debe estar encapsulada

## La clase Tiempo

- Debe estar encapsulada

## La clase Nombre

- Debe estar encapsulada

## La clase Paciente

- Debe estar encapsulada
- El constructor debe recibir los parámetros mediante un objeto

## La clase Doctor

- Debe estar encapsulada
- El constructor debe recibir los parámetros mediante un objeto

## La clase Cita

- Debe estar encapsulada
- El constructor debe recibir los parámetros mediante un objeto

## La clase Hospital

- Debe estar encapsulada
- El constructor debe recibir los parámetros mediante un objeto

## La clase PacienteAsegurado

Esta clase es una especialización (Hereda) de la clase Paciente

- Atributos
  - numeroPoliza (number) Número de poliza del asegurado
  - finVigencia (Fecha) Fecha de vigencia de la poliza
  - compañía (string) Nombre de la compañía aseguradora

- Métodos
  - getPerfil() regresa un string con todos los datos del paciente asegurado:
    - nombre, fecha de nacimiento, teléfono, número de poliza, vigencia de la poliza, compañía aseguradora. por ejemplo:
    - Juan Pérez González, 1/Feb/2020, 312-345-5667, 112233, 04/May/2022, Seguros Axa

- Debe estar encapsulada
- El constructor debe recibir los parámetros mediante un objeto.
  