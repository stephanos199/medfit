import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [ FormBuilder ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const updateForm = (email, password) => {
    component.loginForm.setValue({email, password});
    fixture.detectChanges();
  };

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize to an empty user', () => {
    expect(component.loginForm.get('email').value).toBe('');
    expect(component.loginForm.get('password').value).toBe('');
  });

  it('should be valid when user credentials are valid', () => {
    updateForm('fake@mcfakeson.com', 'schoolsucks');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should NOT be valid when user credentials are NOT valid', () => {
    updateForm('wrongmailer.fonee', '');
    expect(component.loginForm.valid).toBeFalsy();
  });
});
