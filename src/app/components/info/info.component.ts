
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  level?: 'Básico' | 'Medio' | 'Avanzado';
};

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  // Texto principal
  headline = 'Perfil profesional';
  intro = `Graduado en Ingeniería del Software por la Universidad Politécnica de Madrid.`;

  // Resumen profesional
  summary = [
    'Experiencia de 2 años y medio como Software Engineer.',
    'Experiencia construyendo microservicios event-driven utilizando Apache Kafka, implementando el Outbox Pattern y CDC con Debezium.',
    'Diseño e implementación de arquitecturas basadas en microservicios.',
    'Integración de bases de datos relacionales y no relacionales.',
    'Aplicación de principios SOLID, clean code y buenas prácticas en backend.',
    'Experiencia trabajando con control de versiones (Git) y CI/CD.',
    'Experiencia implementando autenticación y autorización (JWT, OAuth2).',
    'Desarrollo de tests automatizados para asegurar calidad y estabilidad.',
    'Optimización de rendimiento en servicios backend y consultas a BD.',
    'Uso de Docker para despliegues escalables y reproducibles.',
    'Experiencia en frontend con Angular.',
    'Fundamentos de machine learning y data engineering.',
  ];

  // Skills
  skills: Skill[] = [
    { name: 'Java', level: 'Avanzado' },
    { name: 'Spring', level: 'Avanzado' },
    { name: 'SQL', level: 'Avanzado' },
    { name: 'Angular', level: 'Medio' },
    { name: 'Python', level: 'Medio' },
    { name: 'Backend', level: 'Avanzado' },
    { name: 'Frontend', level: 'Medio' },
  ];

  // “Me gusta” / valores
  highlights = [
    'Diseñar e implementar soluciones escalables, priorizando la mantenibilidad y la calidad del software.',
    'Analizar problemas técnicos de forma metódica y optimizar servicios, consultas y procesos.',
    'Aplicar buenas prácticas de desarrollo, testing automatizado y CI/CD para entregar software fiable.',
    'Utilizar herramientas de inteligencia artificial para agilizar tareas de desarrollo y mejorar mi productividad, validando siempre la calidad de los resultados.',
  ];
}
