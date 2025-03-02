import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { COURSES, GALLERY, NAVBAR_OPTIONS, SOCIAL_LINKS, } from 'src/app/data/data';
import { contactDetail, course, navbarOptions, socialLink } from 'src/app/interfaces/interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ height: '0px', opacity: 0, padding: '0px', overflow: 'hidden' })),
      state('visible', style({ height: '*', opacity: 1, padding: '0px' })),
      transition('hidden <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})
export class DashboardComponent {

  subs!: Subscription;

  courses: course[] = COURSES;
  socialLinks: socialLink[] = SOCIAL_LINKS;
  navOptions: navbarOptions[] = NAVBAR_OPTIONS;
  showMobileNav: boolean = false;
  isLoading: boolean = false;
  isMessageSent: boolean = false;
  copyright: string = "";
  currentTab: number = 0;


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });


  constructor(private api: ApiService, private messageService: MessageService) { }


  ngOnInit(): void {
    document.documentElement.style.setProperty('--lavendar', '#e6e6fa');
    document.documentElement.style.setProperty('--gold', '#d4af37');
    document.documentElement.style.setProperty('--pink', '#ffb0d0');
    document.documentElement.style.setProperty('--blush-pink', '#ff8196');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--palevioletred', '#d87093');
    this.copyright = `Copyright reserved © ${new Date().getFullYear()}`


    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       console.log("Card is in viewport, adding 'visible' class");
    //       entry.target.classList.add('visible');
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, {
    //   threshold: 0.1,
    // });


  }


  windowReload(): void {
    window.location.reload();
  }

  openLink(i: number): void {
    window.open(this.socialLinks[i].link, '_blank');
    if (i == 3) {
      window.location.href = `tel:${this.socialLinks[i].link}`;
    }
  }

  changeTab(i: number) {
    this.currentTab = i;
  }

  goToSection(str: string) {
    window.location.href = str;
  }

  learnMore(course: course) {
    console.log(course);

  }

  getControl(controlName: string): AbstractControl<any, any> | null {
    return this.form.get(controlName);
  }

  onFormSubmit(): void {
    console.log(">>>coming");
    if (this.form.valid) {
      console.log(">>>valid");

      this.messageService.add({ severity: 'info', detail: `Sending message` });
      this.isLoading = true;
      const payload: contactDetail = {
        name: (this.form?.value?.name)?.trim().length ? (this.form.value.name).trim() : "",
        mobileNumber: (this.form?.value?.mobileNumber)?.trim().length ? (this.form.value.mobileNumber).trim() : "",
        emailAddress: (this.form?.value?.emailAddress)?.trim().length ? (this.form.value.emailAddress).trim() : "",
        subject: (this.form?.value?.subject)?.trim().length ? (this.form.value.subject).trim() : "",
        message: (this.form?.value?.message)?.trim().length ? (this.form.value.message).trim() : ""
      };
      // this.subs = this.api.sendContactDetails(payload).subscribe({
      //   next: (res: any) => {
      // this.isLoading = false;
      //     this.form.reset();
      //     // console.log(">>> res", res);
      //     this.messageService.add({ severity: 'success', detail: `I've got your details, will reach you out shortly` });
      //   },
      //   error: (e: any) => {
      //     this.isLoading = false;
      //     console.log("Error log >>>", e);
      //     this.messageService.add({ severity: 'error', detail: 'Something went wrong' });
      //   },
      // });
      setTimeout(() => {
        this.isLoading = false;

      }, 10000);
    } else {
      console.log(">>>invalid");

      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
    // console.log(">>> form", this.form.value);
  }


  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }


  @ViewChildren('courseCard') courseCards: QueryList<ElementRef> | undefined;
  isVisible = false;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    if (this.courseCards) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'visible' class when the card comes into view
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it's visible
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
      });

      // Use toArray() on the QueryList to get the list of cards
      this.courseCards.toArray().forEach(card => observer.observe(card.nativeElement));
    }



  }
}
