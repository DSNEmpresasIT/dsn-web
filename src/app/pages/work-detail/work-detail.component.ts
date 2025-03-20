import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { faLocationDot, faPhone, faEnvelope, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedinIn, faFigma, faNodeJs, faAngular, faReact, faTrello, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { ContactComponent } from "../../../components/home/contact/contact.component";
import { NavigationService } from '../../services/navigation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-work-detail',
  imports: [
    ContactComponent,
    FontAwesomeModule
  ],
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkDetailComponent {

  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faHeadphonesSimple = faHeadphonesSimple
  faWhatsapp = faWhatsapp;
  faLinkedinIn = faLinkedinIn;
  faFigma = faFigma;
  faNodeJs = faNodeJs;
  faAngular = faAngular;
  faReact = faReact;
  faTrello = faTrello;
  faDiscord = faDiscord;

  currentSection: string = '';
  navService = inject(NavigationService);

  @ViewChild('swiperEl', { static: false }) swiperEl?: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const sections = ['sobre-el-proyecto', 'tecnologias', 'resultados', 'inicia-tu-proyecto'];
    let current = '';

    const viewportHeight = window.innerHeight;
    const topLimit = viewportHeight * 0.2;
    const bottomLimit = viewportHeight * 0.9;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= bottomLimit && rect.bottom >= topLimit) {
          current = section;
          break;
        }
      }
    }

    this.currentSection = current;
  }

  isActiveSection(section: string): boolean {
    return this.currentSection === section;
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.style.setProperty('--scroll-padding', '144px');
  }

  ngAfterViewInit() {
    if (this.swiperEl) {
      (this.swiperEl.nativeElement as any).initialize();
    }
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--scroll-padding');
  }

  prevSlide() {
    (this.swiperEl?.nativeElement as any).swiper.slidePrev();
  }

  nextSlide() {
    (this.swiperEl?.nativeElement as any).swiper.slideNext();
  }
  
}
