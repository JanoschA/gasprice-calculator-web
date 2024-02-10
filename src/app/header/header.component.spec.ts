import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { AuthService } from '../auth.service';
import { User } from '../gpc/User';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceMock = {
      user$: of({ 
        id: 'test-id',
        name: 'Test User', 
        email: 'test@test.com',
        imageUrl: 'http://test.com',
        emailVerified: true,
        providerId: 'test-provider'
      } as User),
    };

    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MatIconModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    })
    .compileComponents();

    authService = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to user$ observable from AuthService on init', () => {
    expect(component.user).toEqual({
      id: jasmine.any(String),
      name: 'Test User',
      email: jasmine.any(String),
      imageUrl: 'http://test.com',
      emailVerified: jasmine.any(Boolean),
      providerId: jasmine.any(String)
    });
  });

  it('should unsubscribe from user$ observable on destroy', () => {
    const spy = spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});