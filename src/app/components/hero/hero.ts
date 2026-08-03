import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {

  roles: string[] = [

    'Full Stack Developer',

    'Angular Developer',

    'Backend Developer',

    'Frontend Developer',

    'JavaScript Developer'

  ];

  currentRole = 0;

  private intervalId: any;

  ngOnInit(): void {

    this.intervalId = setInterval(() => {

      this.currentRole++;

      if (this.currentRole >= this.roles.length) {

        this.currentRole = 0;

      }

    }, 2200);

  }

  ngOnDestroy(): void {

    if (this.intervalId) {

      clearInterval(this.intervalId);

    }

  }

  scrollToContact(): void {

  const section = document.getElementById('contact');

  if (section) {

    section.scrollIntoView({

      behavior: 'smooth',
      block: 'start'

    });

  }

}

}
