import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content: 'Tamás Stephen | Frontend Engineer',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Tamás Stephen, Frontend Engineer, Angular, React,  JavaScript, TypeScript, HTML, CSS, SCSS, Frontend Developer, Frontend Development, Frontend Engineer, Frontend Developer, Frontend Development, Frontend Engineer, Web Developer, Web Development, Web Engineer, Web Developer, Web Development, Web Engineer',
    });
    this.meta.addTag({ name: 'author', content: 'Tamás Stephen' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.addTag({ name: 'charset', content: 'utf-8' });
  }
}
