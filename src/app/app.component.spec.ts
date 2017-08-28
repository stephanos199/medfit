import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain the header and footer elements', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.firstChild.tagName).toBe('APP-HEADER');
    expect(fixture.nativeElement.lastChild.tagName).toBe('APP-FOOTER');
  }));

});
