
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  level?: 'Básico' | 'Intermedio' | 'Avanzado';
};

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  // Texto principal
  headline = 'Sobre mí';
  intro = `Soy Graduado en Ingeniería del Software por la Universidad Politécnica de Madrid.
Me encanta resolver problemas y aprender cosas nuevas.`;

  // Resumen profesional
  summary = [
    'Experiencia de aproximadamente 2 años como Backend Software Engineer.',
    'Enfocado en desarrollo de APIs y servicios mantenibles.',
    'Diseño e implementación de arquitecturas basadas en microservicios.',
    'Integración de bases de datos relacionales y no relacionales.',
    'Aplicación de principios SOLID, clean code y buenas prácticas en backend.',
    'Experiencia trabajando con control de versiones (Git) y CI/CD.',
    'Conocimientos en autenticación y autorización (JWT, OAuth2).',
    'Desarrollo de tests automatizados para asegurar calidad y estabilidad.',
    'Optimización de rendimiento en servicios backend y consultas a BD.',
    'Uso de Docker y Kubernetes para despliegues escalables y reproducibles.',
    'También he trabajado en frontend en un proyecto con Angular.',
  ];

  // Skills
  skills: Skill[] = [
    { name: 'Java', level: 'Avanzado' },
    { name: 'Spring', level: 'Intermedio' },
    { name: 'SQL', level: 'Intermedio' },
    { name: 'Angular', level: 'Básico' },
    { name: 'Backend', level: 'Intermedio' },
    { name: 'Frontend (HTML/CSS/TS)', level: 'Básico' },
  ];

  // “Me gusta” / valores
  highlights = [
    'Resolver problemas complejos y convertirlos en soluciones simples.',
    'Aprender rápido y mejorar la calidad del código (refactor, limpieza).',
    'Trabajar con buenas prácticas y enfoque en mantenibilidad.',
  ];
}
