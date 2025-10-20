import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: false,
})
export class FooterComponent {
  readonly linkGithub = 'https://github.com/Glmmm/ticketsson';
  readonly linkFigma =
    'https://www.figma.com/design/NgCLZttXNaFboW9lUGFgEv/Site-Tickets--Almir-?node-id=31-375&t=ZBjsSSizlGUZG0VI-1';
}
